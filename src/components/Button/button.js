import React from "react";
import "./button.css";

const Button = ({text, type, onClick, width, height}) => {
    const isPrimary = type === 'primary';
    return (
        <button
            style={{ width: width || '171px', height: height || '50px' }}
            className={isPrimary ? 'primary' : 'secondary'} onClick={onClick}
        >
            <span className="button__text primary-text-color">{text}</span>
        </button>
    )
}

export default Button;
