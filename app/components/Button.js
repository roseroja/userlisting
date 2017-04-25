import React, {PropTypes} from 'react';

const Button = ({type, name, value, cssClasses}) => {
let controlClass = 'btn';
let bType = 'button';

if (cssClasses && cssClasses.length > 0) {
    controlClass += " " + cssClasses;
}
if (type && type.length > 0) {
    bType = type;
}

return (
    <div className="form-group">
    <button
        type={bType}
        name={name}
        id={name}
        className={controlClass}
        value={value}
    >{value}</button>
    </div>  
);
};

Button.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    cssClasses: PropTypes.string
};
export default Button;
