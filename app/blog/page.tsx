import Link from "next/link";
import { getBlogPosts } from "@/lib/markdown";

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main className="container">
      <h1>Blog</h1>

      <div className="grid">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <article className="card">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
