import React, {PropTypes} from 'react';
import _ from 'lodash';
const TextInput = ({
  type,
  name,
  value,
  placeholder,
  cssClasses,
  onChange,
  error,
  showLabel = true,
  labelValue = ''
}) => {
  const inputId = _.camelCase(name);
  let controlClass = 'form-control';
  if (cssClasses && cssClasses.length > 0) {
    controlClass += " " + cssClasses;
  }
  if (error && error.length > 0) {
    controlClass += " has-error";
  }
  const label = (
    <label htmlFor={inputId}>{labelValue}</label>
  );
  return (
    <div className="form-group">
      {showLabel && label}
      <input
        type={type}
        name={name}
        className={controlClass}
        placeholder={placeholder}
        value={value}
        onChange={onChange}/> {error && <span className="error" style={{color:'#ff0000'}}>{error}</span>}
    </div>
  );
};

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  cssClasses: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  showLabel: PropTypes.bool,
  labelValue: PropTypes.string
};

export default TextInput;
