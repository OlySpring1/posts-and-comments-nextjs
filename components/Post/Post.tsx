import CreateComment from "components/CreateComment/CreateComment";
import { MainWrapper, StyledLink } from "components/ListPost/styled";
import { Title } from "components/PostCard/styled";
import { Description, Row, TitlePost, Comment } from "./styled";
import Link from "next/link";

const Post = ({ post, refreshData }) => {
  return (
    <MainWrapper>
      <Row>
        <TitlePost>{post.title}</TitlePost>
        <Link href="/">
          <StyledLink>
            <a>Posts</a>
          </StyledLink>
        </Link>
      </Row>
      <Description>{post.body}</Description>
      <CreateComment postId={post.id} refreshData={refreshData} />
      <Row>
        {!!post.comments.length && (
          <Title>{post.comments.length} comments:</Title>
        )}
      </Row>
      {post.comments.map((comment) => (
        <Comment key={comment.id}>{comment.body}</Comment>
      ))}
    </MainWrapper>
  );
};
export default Post;
