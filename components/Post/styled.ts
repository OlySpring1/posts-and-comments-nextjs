import { TitlePage } from "components/ListPost/styled";
import { Body } from "components/PostCard/styled";
import styled from "styled-components";
export const Description = styled(Body)`
  margin-bottom: 20px;
  
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const TitlePost = styled(TitlePage)`
text-align: center;
margin-bottom: 20px;`;

export const Comment = styled.p`
  margin: 10px 0;
`;