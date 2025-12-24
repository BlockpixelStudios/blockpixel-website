import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        padding: "20px 0",
        borderBottom: "1px solid #222",
        position: "sticky",
        top: 0,
        background: "var(--bg)",
        zIndex: 10,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LOGO */}
        <Link href="/" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
          <span style={{ color: "var(--primary)" }}>⬛</span>{" "}
          Block<span style={{ color: "var(--secondary)" }}>pixel</span>
        </Link>

        {/* NAV */}
        <nav style={{ display: "flex", gap: "20px" }}>
          <Link href="/projetos">Projetos</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/sobre">Sobre</Link>
        </nav>
      </div>
    </header>
  );
        }
