import { StyledButton } from "./styled";
import { FC } from "react";
import { IButton } from "./types";

const Button: FC<IButton> = ({
  fluid = false,
  asWrapper = false,
  minWidth,
  type = "button",
  borderColor,
  hoverColor,
  bgColor,
  color,
  children,
  padding,
  onClick,
}) => {
  return (
    <StyledButton
      $bgColor={bgColor}
      $color={color}
      onClick={onClick}
      $borderColor={borderColor}
      $fluid={fluid}
      $asWrapper={asWrapper}
      $minWidth={minWidth}
      $hoverColor={hoverColor}
      $padding={padding}
      type={type}
    >
      {children}
    </StyledButton>
  );
};
export default Button;
