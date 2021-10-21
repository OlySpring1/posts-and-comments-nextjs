import Delimiter from "components/Delimiter/Delimiter";
import PostCard from "components/PostCard/PostCard";
import { MainWrapper, TitlePage, PostsWrapper, StyledLink } from "./styled";
import Link from "next/link";
import { Row } from "components/Post/styled";
const ListPost = ({ posts }) => {
  return (
    <MainWrapper>
      <Row>
        <TitlePage>Posts</TitlePage>
        <Link href="/posts/new">
          <StyledLink>
            {" "}
            <a>Create Post</a>
          </StyledLink>
        </Link>
      </Row>
      <Delimiter />
      <PostsWrapper>
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </PostsWrapper>
    </MainWrapper>
  );
};

export default ListPost;
