
import axios from 'axios';
import ListPost from 'components/ListPost/ListPost';


function Blog({ posts })  {
  return (
    <ListPost posts={posts}/>
  )
}

export const getStaticProps = async ()  => {
  
  const res = await axios.get('https://simple-blog-api.crew.red/posts')
  const posts = await res.data;
  return {
    props: {
      posts,
    },
  }
}


export default Blog