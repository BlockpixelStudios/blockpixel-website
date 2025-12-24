export default function Footer() {
  return (
    <footer style={{ padding: "40px 20px", borderTop: "1px solid #222", marginTop: "80px" }}>
      <div className="container">
        <p style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} Blockpixel Studios — Criando universos.
        </p>
      </div>
    </footer>
  );
}
