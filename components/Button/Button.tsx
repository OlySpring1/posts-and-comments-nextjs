import { StyledButton } from "./styled";
import { FC } from "react";
import { IButton } from "./types";

const Button: FC<IButton> = ({ bgColor, color, children, onClick }) => {
  return (
    <StyledButton $bgColor={bgColor} $color={color} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
export default Button;
