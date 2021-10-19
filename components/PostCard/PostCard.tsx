import { FC } from "react";
import Link from "next/link";
import { StyledWrapper, Title, Body } from "./styled";

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <StyledWrapper>
      <Title>
        <Link href={`posts/${post.id}`}>
          <a>{post.title}</a>
        </Link>
      </Title>
      <Body>{post.body}</Body>
    </StyledWrapper>
  );
};

export default PostCard;
