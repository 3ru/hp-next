import Layout from "../components/Layout";
import Post from "../components/Post";
import Link from "next/link";
import { getAllPostsData } from "../lib/posts";

export default function Blog({ posts }) {
  return (
    <Layout title="Blog">
      <div className="text-2xl mt-4">
        These data are taken from the{" "}
        <a
          className="cursor-pointer test-blue-500 border-b hover:bg-gray-400"
          href="https://jsonplaceholder.typicode.com/posts"
        >
          testing API
        </a>
        .
      </div>
      <ul className="m-10">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
}
