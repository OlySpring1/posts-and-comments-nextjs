import styled from "styled-components";
export const StyledButton = styled.button<{
  $bgColor: string;
  $color: string;
  $borderColor: string;
  $hoverColor: string;
  $asWrapper: boolean;
  $fluid: boolean;
  $minWidth: string;
  $padding: string;
}>`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 160%;
  text-align: center;
  letter-spacing: 0.05em;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  padding: ${({ $padding }) => $padding ?? "12px 30px"};
  ${({ $fluid, $asWrapper, $minWidth }) => {
    if ($asWrapper) return { width: "100%", height: "100%" };
    if ($fluid) return { width: "100%", height: "fit-content" };
    return { minWidth: $minWidth ?? "221px", height: "fit-content" };
  }}
  color: ${({ $color }) => $color || "white"};
  background-color: ${({ $bgColor }) => $bgColor || "#0d6efd"};
  border-radius: 10px;
  border: 1px solid;
  border: ${({ $borderColor }) =>
    $borderColor ? `2px solid ${$borderColor}` : "2px solid transparent"};
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${({ $hoverColor }) => $hoverColor || "#0b5ed7"};
  }
`;
