import React, { useState } from 'react';
import Header from '../../main/header';
import TextRow from '../../main/text-block';
import Image from '../../main/img-block';
import Row from '../../columns/row';
import Table from '../../table/table';
import { List, ListItem } from '../../lists/list';
import { Tabs, Tab } from '../../tabs/tab';
import LiveDemo from '../../livedemo/live-demo';
import { TextField } from '../../textfields/textfield';


const columnsVariant = [
  { header: 'Variant', accessor: 'variant'},
  { header: 'Usage', accessor: 'usage'},
  { header: 'Purpose', accessor: 'purpose', flex: 50 }
];

const dataVariant = [
  {
    variant: 'Separated',
    usage: 'Default',
    purpose: 'Default style for text fields.'
  },
  {
    variant: 'Attached',
    usage: 'Alternative',
    purpose: 'An alternative style for text fields.'
  },
  {
    variant: 'Stacked',
    usage: 'For compact horizontal space',
    purpose: 'An alternative style when there is a lack of horizontal space.'
  }
];

const columnsElement = [
  { header: 'Element', accessor: 'element'},
  { header: 'Relevant Class', accessor: 'class'},
  { header: 'Property', accessor: 'property'}
];

const dataElement = [
  {
    element: 'textfield wrapper',
    class: 'text-field',
    property: ''
  },
  {
    element: 'label container',
    class: 'text-field-label',
    property: 'background-size'
  },
  {
    element: 'text label',
    class: 'text-field-label',
    property: 'color'
  },
  {
    element: 'icon label',
    class: 'text-field-label-icon',
    property: 'fill'
  },
  {
    element: 'input',
    class: 'text-field-input',
    property: 'color'
  },
];

const columnsLabel = [
  { header: 'Label Variant', accessor: 'variant'},
  { header: 'Usage', accessor: 'usage', flex: 50}
];

const dataLabel = [
  {
    variant: 'Text',
    usage: 'labelType = text'
  },
  {
    variant: 'Icon',
    usage: 'labelType = icon, icon = Define svg'
  }
];

const columnsState = [
  { header: 'State', accessor: 'state' },
  { header: 'Element', accessor: 'element'},
  { header: 'Property', accessor: 'property'},
  { header: 'Token', accessor: 'token'},
  { header: 'Effect Token', accessor: 'effect' }
];

const dataState = [
  {
    state: 'Hover',
    element: 'label container',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: ''
  },
  {
    state: '',
    element: 'text label',
    property: 'color',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: '',
    element: 'icon label',
    property: 'fill',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: 'Pressed',
    element: 'label container',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: 'pressed-inner-shadow'
  },
  {
    state: '',
    element: 'text label',
    property: 'color',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: '',
    element: 'icon label',
    property: 'fill',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: 'Focused',
    element: 'label container',
    property: 'background-size',
    token: 'interactive/surface-active',
    effect: ''
  },
  {
    state: '',
    element: 'text label',
    property: 'color',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: '',
    element: 'icon label',
    property: 'fill',
    token: 'interactive/on-surface-active',
    effect: ''
  },
  {
    state: 'Disabled',
    element: 'label container',
    property: 'border-color',
    token: 'interactive/on-surface-disabled',
    effect: ''
  },
  {
    state: '',
    element: 'text label',
    property: 'color',
    token: 'interactive/on-surface-disabled',
    effect: ''
  },
  {
    state: '',
    element: 'icon label',
    property: 'fill',
    token: 'interactive/on-surface-disabled',
    effect: ''
  },
  {
    state: 'Placeholder',
    element: 'text-field-input',
    property: 'color',
    token: 'interactive/placeholder-text-color',
    effect: ''
  },
  {
    state: 'Filled',
    element: 'text-field-input',
    property: 'background-color',
    token: 'interactive/on-surface',
    effect: ''
  },
];



export default function ContentTextFields() {
  const [selectedTab, setSelectedTab] = useState(0);



  const [textValue, setTextValue] = useState(""); // State for storing input value

  const handleChange = (e) => {
    setTextValue(e.target.value); // Update input value on change
  };


  return (
    <>
    <Header tag="h1" textStyle="display-med">Text Fields</Header>
    <TextRow textStyle="title-large" colorStyle="default">Dropdowns present choices—helping users fill forms, filter content, and sort results with focused intent.
    </TextRow>
    <Tabs onTabChange={(index) => setSelectedTab(index)}>
        <Tab>Usage</Tab>
        <Tab>Style</Tab>
        <Tab>Demo</Tab>
    </Tabs>

    {selectedTab === 0 && (
      <>
      <Header tag="h2" textStyle="headline-med">Variants</Header>
      <Row><Table columns={columnsVariant} data={dataVariant} /></Row>
      <Header tag="h3"  textStyle="title-med">Interactive Examples</Header>
      <Row itemsPerRow={3} rowWidth="full">

        <div style={{border: '1px solid var(--border-tertiary-color)', height: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <TextField
          id="text-field-1"
          label="Search"
          value={textValue}
          onChange={handleChange}
          placeholder="Enter value"
          variant="separated"
        />
        </div>

        <div style={{border: '1px solid var(--border-tertiary-color)', height: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <TextField
          id="text-field-1"
          label="Search"
          value={textValue}
          onChange={handleChange}
          placeholder="Enter value"
          variant="attached"
        />
        </div>

        <div style={{border: '1px solid var(--border-tertiary-color)', height: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <TextField
          id="text-field-1"
          label="Search"
          value={textValue}
          onChange={handleChange}
          placeholder="Enter value"
          variant="stacked"
        />
        </div>
      </Row>

      <Header tag="h2" textStyle="headline-med">Applications</Header>
      <Row itemsPerRow={3}>
      <div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Avoid Mixing Textfield Styles</Header>
        <TextRow textStyle="body-large" spacing="in-columns">There isn't a strict guideline on when to use which textfield style to use. The general guideline would be to avoid mixing different style within the same section of the interface, this includes mixing the text label and icon labels.</TextRow>
      </div>
      <div>
      <Image variant="fullspan" src="/assets/content-textfields/application1-example.png" alt="textfield application example 1 - do" />
      <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">When employing textfields within a section, use the same style for visual consistency.</TextRow>
      </div>
      <div>
      <Image variant="fullspan" src="/assets/content-textfields/application2-example.png" alt="textfield application example 2 - don't" />
      <TextRow spacing="in-columns" textStyle="body-small" textColor="caption">Avoid mixing textfield style within the same section.</TextRow>
      </div>
      </Row>

      </>
    )}

    {selectedTab === 1 && (
      <>
        <Header tag="h2" textStyle="headline-med">Elements</Header>
        <Row><Table columns={columnsElement} data={dataElement} /></Row>

        <Header tag="h2" textStyle="headline-med">Label Variants</Header>
        <Row><Table columns={columnsLabel} data={dataLabel} /></Row>

        <Row itemsPerRow={3} rowWidth="full">

          <div style={{border: '1px solid var(--border-tertiary-color)', height: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <TextField
            id="text-field-1"
            label="Search"
            value={textValue}
            onChange={handleChange}
            placeholder="Enter value"
            variant="separated"
          />
          </div>

          <div style={{border: '1px solid var(--border-tertiary-color)', display: 'flex', justifyContent: 'center', alignItems: 'center', height:'200px'}}>
          <TextField
            id="text-field-5"
            label="Search"
            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9835 14.2404C12.3851 14.5347 11.7119 14.7 11 14.7C8.51472 14.7 6.5 12.6853 6.5 10.2C6.5 7.71472 8.51472 5.7 11 5.7C13.4853 5.7 15.5 7.71472 15.5 10.2C15.5 11.4318 15.0051 12.5479 14.2033 13.3605L17.5396 17.3365L16.3905 18.3007L12.9835 14.2404ZM14.1 10.2C14.1 11.9121 12.7121 13.3 11 13.3C9.28792 13.3 7.9 11.9121 7.9 10.2C7.9 8.48791 9.28792 7.1 11 7.1C12.7121 7.1 14.1 8.48791 14.1 10.2Z"/>
            </svg>}
            value={textValue}
            onChange={handleChange}
            placeholder="Enter value"
            labelType="icon" // Using icon as label
            variant="separated"

          />
          </div>

        </Row>


        <Header tag="h2" textStyle="headline-med">Anatomy</Header>
        <Row itemsPerRow={3} rowWidth="full" >
        <div>
        <div style={{ border: '1px solid var(--border-tertiary-color)'}}>
        <Image variant="fullwidth" src="/assets/content-textfields/textfield-anatomy1.png" alt="text field anatomy example 1" />
        </div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Textfield - Separated variant</Header>
        <List>
          <ListItem title="A. Label Container"/>
          <ListItem title="B. Text Label"/>
          <ListItem title="C. Input"/>
          <ListItem title="D. Input Container"/>
          <ListItem title="E. Textfield Wrapper"/>
        </List>
        </div>
        <div>
        <div style={{ border: '1px solid var(--border-tertiary-color)'}}>
        <Image variant="fullwidth" src="/assets/content-textfields/textfield-anatomy3.png" alt="text field anatomy example 2" />
        </div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Textfield - Separated variant</Header>
        <List>
        <ListItem title="A. Label Container"/>
        <ListItem title="B. Text Label"/>
        <ListItem title="C. Input"/>
        <ListItem title="D. Input Container"/>
        <ListItem title="E. Textfield Wrapper"/>
        </List>
        </div>
        <div>
        <div style={{ border: '1px solid var(--border-tertiary-color)'}}>
        <Image variant="fullwidth" src="/assets/content-textfields/textfield-anatomy2.png" alt="text field anatomy example 3" />
        </div>
        <Header tag="h3" textStyle="body-large-emphasized" spacing="in-columns">Textfield - Separated with icon variant</Header>
        <List>
        <ListItem title="A. Label Container"/>
        <ListItem title="C. Input"/>
        <ListItem title="D. Input Container"/>
        <ListItem title="E. Textfield Wrappe"/>
        <ListItem title="F. Icon Label"/>
        </List>
        </div>
        </Row>

        <Header tag="h2" textStyle="headline-med">States</Header>
        <Row><Table columns={columnsState} data={dataState} /></Row>
        <Row itemsPerRow={4}>
        <Image src="/assets/content-textfields/enabled.png" alt="textfield enabled state" withMargin="false"/>
        <Image src="/assets/content-textfields/hover.png" alt="textfield hover state" withMargin="false"/>
        <Image src="/assets/content-textfields/focus.png" alt="textfield focus state" withMargin="false"/>
        <Image src="/assets/content-textfields/disabled.png" alt="textfield disabled state" withMargin="false"/>
        <Image src="/assets/content-textfields/filled-enabled.png" alt="textfield filled.enabled state" withMargin="false"/>
        <Image src="/assets/content-textfields/filled-hover.png" alt="textfield filled.hover state" withMargin="false"/>
        <Image src="/assets/content-textfields/filled-focus.png" alt="textfield filled.focus state" withMargin="false"/>
        <Image src="/assets/content-textfields/filled-disabled.png" alt="textfield filled.disabled state" withMargin="false"/>
        </Row>
      </>
    )}

    {selectedTab === 2 && (
      <>
        <Header tag="h2" textStyle="headline-med">Live Demo</Header>

        <LiveDemo
          component={TextField}
          componentName="TextField"
          previewWidth="400px"
          propSchema={{
            id: { type: 'string', default: 'demo-textfield', label: 'ID'},
            label: { type: 'string', default: 'Name', label: 'Label' },
            placeholder: { type: 'string', default: 'Enter your name', label: 'Placeholder' },
            value: { type: 'string', default: '', label: 'Value' },
            variant: { type: 'enum', options: ['attached', 'separated', 'stacked'], default: 'separated', label: 'Variant' },
            labelType: { type: 'enum', options: ['text', 'icon'], default: 'text', label: 'Label Type'},
            disabled: { type: 'boolean', default: false, label: 'Disabled' },
          }}
        >
          {(props) => (
            <TextField
              {...props}
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M11.3722 11.678L8.89089 11.7417L10.9121 13.6962L10.172 15.5581L11.9808 14.6736L13.9091 15.5484L13.0452 13.7375L15.1091 11.7417L12.6278 11.678L12 9.79473L11.3722 11.678ZM10.5 10.5L6 10.6154L9.5 14L7.9102 18L12 16L16.4082 18L14.5 14L18 10.6154L13.5 10.5L12 6L10.5 10.5Z"
                  />
                </svg>
              }
              onChange={(e) =>
                props.onChange
                  ? props.onChange(e.target.value)
                  : console.warn("No onChange handler passed!")
              }
            />
          )}
        </LiveDemo>
      </>
    )}
    </>
  );
}
