import { useState, useRef, useEffect } from "react";
import { Checkbox } from '../checkboxes/checkbox';
import './dropdown.css';

export function Dropdown({
  options,
  multiple = false,
  value,
  onChange,
  children,
  placeholder = "Select...",
  label,
  labelStyle = "stacked", // "stacked" | "inline"
  hideLabel = false,
  width = "auto"
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const [direction, setDirection] = useState('down');
  const listRef = useRef(null);

  useEffect(() => {
    if (isOpen && buttonRef.current && listRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const listRect = listRef.current.getBoundingClientRect();

      const spaceBelow = window.innerHeight - buttonRect.bottom;
      const spaceAbove = buttonRect.top;

      const dropdownHeight = listRect.height;

      if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
        setDirection('up');
      } else {
        setDirection('down');
      }
    }
  }, [isOpen]);

  const handleSelect = (selectedValue) => {
    if (!onChange) return;

    if (multiple) {
      const current = Array.isArray(value) ? value : [];
      const newValue = current.includes(selectedValue)
        ? current.filter((v) => v !== selectedValue)
        : [...current, selectedValue];
      onChange(newValue);
    } else {
      onChange(selectedValue);
      setIsOpen(false);
    }
  };

  const isSelected = (val) =>
    multiple ? Array.isArray(value) && value.includes(val) : value === val;
  const allValues = options?.map((opt) => opt.value) || [];
  const allSelected = allValues.every((val) => isSelected(val));

  const capitalizeLabel = (val, options) => {
    const match = options.find(opt => opt.value === val);
    return match ? capitalize(match.label) : capitalize(val);
  };

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const handleSelectAll = () => {
    if (!onChange) return;
    if (allSelected) {
      onChange([]);
    } else {
      onChange(allValues);
    }
  };

  return (
    <div className={`dropdown dropdown-${labelStyle}`} ref={dropdownRef} style={{ width }}>
    {label && !hideLabel && (
      <label className={`dropdown-label dropdown-label-${labelStyle}`}>
        {label}
      </label>
      )}

      <button
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="dropdown-button"
      >
        <span className="dropdown-button-text">
          {multiple && Array.isArray(value)
            ? value.join(", ") || placeholder
            : (typeof value === "string" && capitalizeLabel(value, options)) || placeholder}
        </span>
        <span
          className={`dropdown-icon${isOpen ? " open" : ""}`}
          aria-hidden="true"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M11.3 10L8.5 10L12 14L15.5 10H12.7L11.3 10Z" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <ul
          ref={listRef}
          role="listbox"
          aria-multiselectable={multiple || undefined}
          className={`dropdown-list ${multiple ? 'multi-select' : ''} dropdown-list-${direction}`}
        >
          {multiple && (
            <li
              role="option"
              aria-selected={allSelected}
              onClick={handleSelectAll}
              className={`dropdown-item${allSelected ? " selected" : ""}`}
            >
              <span className="dropdown-item-label">All</span>
              <span
                className="dropdown-item-checkbox"
                onClick={(e) => e.stopPropagation()}
              >
                <Checkbox
                  id="checkbox-select-all"
                  checked={allSelected}
                  onChange={handleSelectAll}
                  hideLabel
                  variant="default"
                />
              </span>
            </li>
          )}

          {options
            ? options.map((opt) => (
              <li
                key={opt.value}
                role="option"
                aria-selected={isSelected(opt.value)}
                onClick={() => handleSelect(opt.value)}
                className={`dropdown-item${isSelected(opt.value) ? " selected" : ""}`}
              >
                <span className="dropdown-item-label">{capitalize(opt.label)}</span>

                {multiple && (
                  <span
                    className="dropdown-item-checkbox"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <Checkbox
                      id={`checkbox-${opt.value}`}
                      checked={isSelected(opt.value)}
                      onChange={() => handleSelect(opt.value)}
                      hideLabel
                      variant="default"
                    />
                  </span>
                )}
              </li>
            ))
            : children}
        </ul>
      )}
    </div>
  );
}
