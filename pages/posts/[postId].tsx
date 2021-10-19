import axios from "axios";
import { useRouter } from "next/router";
import Post from "components/Post/Post";

const PostPage = ({post}) => {
  const router = useRouter();
  const { postId: IdPost } = router.query;
  console.log('postPost', post);
  
  return <Post post={post}/>;
};

export async function getStaticPaths() {
  const res = await axios.get("https://simple-blog-api.crew.red/posts");
  //@ts-ignore
  const posts: IPost[] = await res.data;

  const paths = posts.map((post) => ({
    params: { postId: `${post.id}` },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({params}) => {
  console.log('params', params);
  
  const res = await axios.get(
    `https://simple-blog-api.crew.red/posts/${params.postId}?_embed=comments`
  );
  const post = await res.data;
  return {
    props: {
      post
    },
  };
};
export default PostPage;
