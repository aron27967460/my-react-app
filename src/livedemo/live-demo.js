import React, { useState, useRef, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-jsx';
import './live-demo.scss';
import pretty from 'pretty';
import { Checkbox } from '../checkboxes/checkbox';
import { Dropdown } from '../dropdowns/dropdown';
import { TextField } from '../textfields/textfield';

const LiveDemo = ({
  component: Component,
  componentName = "Component",
  propSchema = {},
  label = '',
  previewWidth = '100%',
  children: customChildren = null,
}) => {
  const defaultProps = Object.fromEntries(
    Object.entries(propSchema).map(([key, def]) => [key, def.default || ''])
  );

  const [propsState, setPropsState] = useState(defaultProps);
  const [htmlCode, setHtmlCode] = useState('');
  const componentRef = useRef(null);

  const handleChange = (key, value) => {
    const parsedValue = value === 'true' ? true : value === 'false' ? false : value;
    setPropsState((prev) => ({
      ...prev,
      [key]: parsedValue,
    }));
  };

  // Capture the HTML output after each render
  useEffect(() => {
    Prism.highlightAll();
  }, [propsState, customChildren]);

  useEffect(() => {
  if (componentRef.current) {
    const rawHtml = componentRef.current.innerHTML;
    setHtmlCode(pretty(rawHtml));
  }
}, [propsState, customChildren]);

  // Create JSX-style string from props
  const renderCode = () => {
    const { children, ...restProps } = propsState;

    const propStrings = Object.entries(restProps)
      .map(([key, val]) =>
        typeof val === 'string' ? `  ${key}="${val}"` : `  ${key}={${JSON.stringify(val)}}`
      )
      .join('\n');

  // Build JSX manually
    const childrenString = customChildren
      ? React.Children.map(customChildren, (child) => {
          if (typeof child === 'string') {
            return child;
          }
          if (React.isValidElement(child)) {
            const typeName = typeof child.type === 'string' ? child.type : (child.type.name || 'Unknown');
            const propsString = Object.entries(child.props || {})
              .filter(([key]) => key !== 'children') // exclude children here
              .map(([key, val]) =>
                typeof val === 'string' ? `${key}="${val}"` : `${key}={${JSON.stringify(val)}}`
              )
              .join(' ');
            const childrenText = child.props?.children || '';
            return `  <${typeName} ${propsString}>${childrenText}</${typeName}>`;
          }
          return '';
        }).join('\n')
      : (children || '');

    return `<${componentName}\n${propStrings}\n>\n${childrenString}\n</${componentName}>`;
  };

  const { children, ...otherProps } = propsState;

  const interactiveProps = { ...otherProps };

  // Safely wire onChange for string "value" prop
  if (
    'value' in propSchema &&
    propSchema.value.type === 'string' &&
    typeof interactiveProps.value === 'string'
  ) {
    interactiveProps.onChange = (e) => {
      const newValue = e.target?.value ?? e;
      setPropsState((prev) => ({ ...prev, value: newValue }));
    };
  }

  Object.entries(propSchema).forEach(([key, config]) => {
    if (
      config.type === 'boolean' &&
      key === 'checked' &&
      typeof interactiveProps.onChange !== 'function'
    ) {
      interactiveProps.onChange = (newValue) => {
        setPropsState((prev) => ({ ...prev, checked: newValue }));
      };
    }
  });

  return (
    <div className="live-demo-container">
      <div className="demo-controls">
        {Object.entries(propSchema).map(([propName, config]) => {
          const displayLabel = config.label || propName;

          if (config.type === 'enum') {
            return (
              <div key={propName} className="dropdown-wrapper">
                <Dropdown
                  label={displayLabel}
                  options={config.options.map((option) => ({
                    value: option,
                    label: option,
                  }))}
                  labelStyle={'inline'}
                  value={propsState[propName]}
                  onChange={(val) => handleChange(propName, val)}
                />
              </div>
            );
          }

          if (config.type === 'boolean') {
            return (
              <Checkbox
                key={propName}
                id={`checkbox-${propName}`}
                label={displayLabel}
                checked={propsState[propName]}
                onChange={(e) => handleChange(propName, e.target.checked)}
                variant="contained"
              />
            );
          }

          if (config.type === 'string') {
            return (
              <TextField
                key={propName}
                label={displayLabel}
                value={propsState[propName]}
                onChange={(e) => handleChange(propName, e.target.value)}
                variant="attached"
              />
            );
          }

          return null;
        })}
      </div>

      <div className='demo-preview' style={{ width: previewWidth }} ref={componentRef}>
      {typeof customChildren === 'function' ? (
        customChildren({ ...interactiveProps })
        ) : (
        <Component {...interactiveProps}>
          {customChildren || children}
        </Component>
        )}
      </div>

      <div className="code-preview">
        <h3>React JSX</h3>
        <pre>
          <code
            className="language-jsx"
            dangerouslySetInnerHTML={{ __html: Prism.highlight(renderCode(), Prism.languages.jsx, 'jsx') }}
          />
        </pre>

        <h3>Rendered HTML</h3>
        <pre>
          <code
            className="language-html"
            dangerouslySetInnerHTML={{ __html: Prism.highlight(htmlCode, Prism.languages.html, 'html') }}
          />
        </pre>
      </div>
    </div>
  );
};

export default LiveDemo;
