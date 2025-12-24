import { getBlogPosts } from "@/lib/markdown";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export default function BlogPostPage({ params }: any) {
  const posts = getBlogPosts();
  const post = posts.find((p: any) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <main className="container" style={{ paddingTop: "60px" }}>
      <article>
        <h1 style={{ marginBottom: "12px" }}>{post.title}</h1>

        <p style={{ color: "var(--muted)", marginBottom: "32px" }}>
          {post.date}
        </p>

        <ReactMarkdown>
          {post.content}
        </ReactMarkdown>
      </article>
    </main>
  );
}
