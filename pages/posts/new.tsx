import axios from "axios";
import Button from "components/Button/Button";
import {
  ButtonWrapper,
  StyledForm,
  TextField,
} from "components/CreateComment/styled";
import Delimiter from "components/Delimiter/Delimiter";
import Input from "components/Input/Input";
import { MainWrapper, StyledLink, TitlePage } from "components/ListPost/styled";
import { useState } from "react";
import Link from "next/link";
import { Row } from "components/Post/styled";

const CreatePost = () => {
  const [post, setPost] = useState({ title: "", body: "" });

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        "https://simple-blog-api.crew.red/posts",
        {
          ...post,
        },
        { headers: { "content-type": "application/json" } }
      )
      .then(() => setPost({ title: "", body: "" }))
      .catch((e) => console.log("submit post", e));
  };

  return (
    <MainWrapper>
      <Row>
        <TitlePage>Create new post</TitlePage>
        <Link href="/">
          <StyledLink>
            <a>Posts</a>
          </StyledLink>
        </Link>
      </Row>
      <Delimiter />
      <StyledForm onSubmit={handleSubmit}>
        <Input
          value={post.title}
          onChange={handleChange}
          name="title"
          placeholder="Title of your post"
        />
        <TextField
          value={post.body}
          onChange={handleChange}
          placeholder="Lets get started"
          name="body"
        />
        <ButtonWrapper>
          <Button
            type="submit"
            // onClick={handleSubmit}
            minWidth="120px"
            padding="6px"
          >
            Create Post
          </Button>
        </ButtonWrapper>
      </StyledForm>
    </MainWrapper>
  );
};

export default CreatePost;
