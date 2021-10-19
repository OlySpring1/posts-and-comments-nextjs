import Delimiter from "components/Delimiter/Delimiter";
import PostCard from "components/PostCard/PostCard";
import { MainWrapper, TitlePage } from "./styled";

const ListPost = ({ posts }) => {
  return (
    <MainWrapper>
      <TitlePage>
        Posts
      </TitlePage>
      <Delimiter/>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </MainWrapper>
  );
};

export default ListPost;
