import Button from "components/Button/Button";
import CommentText from "components/CommentText/CommentText";
import { MainWrapper } from "components/ListPost/styled";
import { Title } from "components/PostCard/styled";
import { Description, Row } from "./styled";

const Post = ({ post }) => {
  
  return (
    <MainWrapper>
      <Title>{post.title}</Title>
      <Description>{post.body}</Description>
      <Row>
      <Title>Comments:</Title>
      <Button onClick={() =>console.log('Add Comments')}>
        Add Comment
      </Button>
      </Row>
      {post.comments.map((comment) => (
        <div>{comment.body}</div>
      ))}
      <CommentText/>
    </MainWrapper>
  );
};
export default Post;
