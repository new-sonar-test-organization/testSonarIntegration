import React from "react";
import { Button as MuiButton } from "@material-ui/core";
import PropTypes from "prop-types";

const Button = ({ variant, disabled, color, size, onClick, label }) => {
  return (
    <MuiButton
      variant={variant}
      disabled={disabled}
      color={color}
      size={size}
      onClick={onClick}
    >
      {label}
    </MuiButton>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.string, //isRequired
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: "contained",
  size: "medium",
  color: "primary",
};

export default Button;
