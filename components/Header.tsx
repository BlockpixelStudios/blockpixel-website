import Link from "next/link";

export default function Header() {
  return (
    <header style={{ padding: "20px", borderBottom: "1px solid #222" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between" }}>
        <strong>⬛ Blockpixel</strong>

        <nav style={{ display: "flex", gap: "20px" }}>
          <Link href="/">Home</Link>
          <Link href="/projetos">Projetos</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  );
}
