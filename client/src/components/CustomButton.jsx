import React from 'react';

const CustomButton = ({
  text,
  icon,
  iconColor,
  textColor,
  backgroundColor,
  borderColor,
  onClick,
  padding
}) => {
  const buttonStyle = {
    color: textColor || 'white',
    backgroundColor: backgroundColor || 'blue',
    borderRadius: '5px',
    border: borderColor || 'none',
    padding: padding || '5px',
    fontSize: '12px',
    fontWeight: 500
  };

  return (
    <button className="custom-button" style={buttonStyle} onClick={onClick}>
      <span style={{marginRight: "10px"}}>{text}</span>
      {icon && icon}
    </button>
  );
};

export default CustomButton;
