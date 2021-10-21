import styled from "styled-components";

export const MainWrapper = styled.div`
  padding: 10px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const TitlePage = styled.h1`
  font-size: 30px;
  font-weight: 800;
`;

export const PostsWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(200px, 300px));
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, 1fr);
  }
`;
export const StyledLink = styled.div`
  color: gray;
  cursor: pointer;
`;