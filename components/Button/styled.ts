import styled from "styled-components";
export const StyledButton = styled.button<{
  $bgColor: string; 
  $color: string;
}>`
font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 160%;
text-align: center;
letter-spacing: 0.05em;
cursor: pointer;
justify-content: center;
  align-items: center;
  text-transform: uppercase;
  padding: 12px 30px;
  color: ${({ $color }) => $color || "white"};
  background-color: ${({ $bgColor }) => $bgColor || "green"};
`;
