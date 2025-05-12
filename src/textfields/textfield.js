import React from "react";
import classNames from "classnames";
import './textfield.css';

export const TextField = ({
  id,
  label,
  icon,
  value,
  onChange,
  placeholder = "",
  variant = "separated", // Default variant is 'separated'
  labelType = "text",
  name,
  disabled = false,
}) => {
  const hasValue = value && value.trim() !== "";

  return (
    <div
      className={classNames("text-field", {
        "text-field-attached": variant === "attached",
        "text-field-separated": variant === "separated",
        "text-field-stacked": variant === "stacked",
        "text-field-has-value": hasValue,
        "text-field-disabled": disabled,
      })}
    >
      <label
        id={`${id}-label`}
        htmlFor={id}
        className={classNames("text-field-label", {
          "text-field-label-icon": labelType === "icon",
        })}
      >
        {labelType === "icon" ? icon : label}
      </label>
      <input
        type="text"
        id={id}
        name={name || id}
        className="text-field-input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        aria-labelledby={labelType === "icon" ? `${id}-label` : undefined}
      />
    </div>
  );
};
