import { getBlogPosts } from "../../lib/markdown";

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main className="container">
      <h1>Blog</h1>

      {posts.map((post: any) => (
        <article key={post.slug} style={{ marginTop: "40px" }}>
          <h2>{post.title}</h2>
          <p style={{ color: "var(--muted)" }}>{post.description}</p>
        </article>
      ))}
    </main>
  );
}
