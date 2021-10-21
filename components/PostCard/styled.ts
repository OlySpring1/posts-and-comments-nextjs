import styled from "styled-components";
export const StyledWrapper = styled.div`
  width: 100%;
  min-width: 250px;
  padding: 6px;
  &:hover {
    box-shadow: 1px 1px 8px 6px rgba(34, 60, 80, 0.2);
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;
export const Body = styled.p`
  font-size: 14px;
  text-transform: capitalize;
`;
