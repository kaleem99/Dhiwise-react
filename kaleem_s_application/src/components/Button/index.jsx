import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CustomBorderLR4: "rounded-bl-none rounded-br rounded-tl-none rounded-tr",
};
const variants = {
  OutlineGray300: "bg-white_A700",
  OutlineGray300_1: "bg-white_A700 border border-gray_300 border-solid",
};
const sizes = { sm: "p-2" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["CustomBorderLR4"]),
  variant: PropTypes.oneOf(["OutlineGray300", "OutlineGray300_1"]),
  size: PropTypes.oneOf(["sm"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
