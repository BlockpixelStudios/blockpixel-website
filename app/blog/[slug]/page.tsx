import { getBlogPostBySlug } from "@/lib/markdown";
import ReactMarkdown from "react-markdown";

export default function BlogPost({ params }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) return null;

  return (
    <main className="container">
      <article>
        <h1>{post.title}</h1>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </main>
  );
}
