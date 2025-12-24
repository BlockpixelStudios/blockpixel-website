import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="logo">
        <img src="/logo.png" alt="Blockpixel Studios" />
        <span>Blockpixel</span>
      </Link>

      <nav>
        <Link href="/projetos">Projetos</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/sobre">Sobre</Link>
      </nav>
    </header>
  );
}
