import React from "react";
import PropTypes from "prop-types"
import styles from "./button.module.css";

const Button = ({text, type, onClick, width, height}) => {
    const isPrimary = type === 'primary';
    return (
        <button
            style={{ width: width || '171px', height: height || '50px' }}
            className={isPrimary ? styles.primary : styles.secondary} onClick={onClick}
        >
            <span className={`${styles.text} primary-text-color`}>{text}</span>
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
};

export default Button;
