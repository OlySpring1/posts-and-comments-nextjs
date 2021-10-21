import axios from "axios";
import { useRouter } from "next/router";
import Post from "components/Post/Post";
import { useEffect, useState } from "react";

const PostPage = ({ post }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
    setIsRefreshing(true);
  };

  useEffect(() => {
    setIsRefreshing(false);
  }, [post]);
  return <Post post={post} refreshData={refreshData} />;
};

export const getServerSideProps = async ({ query: { postId } }) => {
  const res = await axios.get(
    `https://simple-blog-api.crew.red/posts/${postId}?_embed=comments`
  );
  const post = await res.data;

  return {
    props: {
      post,
    },
  };
};
export default PostPage;
