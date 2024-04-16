// src/components/Button.js
import React from 'react';
import PropTypes from "prop-types";

const Button = ({primary, onClick,children }) => {
    const buttonStyle = primary ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white';
    return <button onClick={onClick} className={buttonStyle}>{children}</button>;
};

Button.propTypes = {
    primary: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}

export default Button;
