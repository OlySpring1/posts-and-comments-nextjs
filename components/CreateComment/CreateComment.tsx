import axios from "axios";
import Button from "components/Button/Button";
import { FC, useState } from "react";
import { ButtonWrapper, StyledForm, TextField } from "./styled";
type CreateCommentProps = {
  postId: number;
  refreshData: () => void;
};
const CreateComment: FC<CreateCommentProps> = ({ postId, refreshData }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    const target = e.target.value;
    setText(target);
  };

  const handleSubmit = () => {
    axios
      .post("https://simple-blog-api.crew.red/comments", {
        postId,
        body: text,
      })
      .then(() => {setText(""); refreshData()})
      .catch((e) => console.error(e));
  };
  return (
    <>
      <TextField
        value={text}
        onChange={handleChange}
        placeholder="Type a comment"
      />
      <ButtonWrapper>
        <Button
          type="submit"
          onClick={handleSubmit}
          minWidth="120px"
          padding="6px"
        >
          Post comment
        </Button>
      </ButtonWrapper>
    </>
  );
};
export default CreateComment;
