// import { posts } from '@/app/lib/placeholder-data';
import { connectToDB, getPosts } from '@/app/lib/data';
import Post from '@/app/ui/components/posts/Post';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const client = await connectToDB();
  const posts = await getPosts();
  const post = posts?.find((post) => post.id === "params.id");

  if (!post) {
    notFound();
  }
  return (
    <>
      <h1>Post</h1>

      {post && <Post {...post} />}
    </>)
}