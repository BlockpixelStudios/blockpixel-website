export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section>
        <div className="container">
          <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
            Blockpixel Studios
          </h1>

          <p style={{ fontSize: "1.3rem", color: "var(--muted)", maxWidth: "700px" }}>
            Criamos universos, histórias e experiências que transformam ideias em
            mundos vivos dentro do Minecraft.
          </p>
        </div>
      </section>

      {/* SOBRE */}
      <section>
        <div className="container">
          <h2 style={{ fontSize: "2rem", marginBottom: "16px" }}>
            Quem somos
          </h2>

          <p style={{ color: "var(--muted)", maxWidth: "800px" }}>
            A Blockpixel Studios é um estúdio criativo focado em projetos autorais,
            roleplay, experiências multiplayer e ferramentas para a comunidade.
            Passamos por desafios, reformas internas e agora seguimos com uma
            visão clara: construir algo único e duradouro.
          </p>
        </div>
      </section>

      {/* O QUE FAZEMOS */}
      <section>
        <div className="container">
          <h2 style={{ fontSize: "2rem", marginBottom: "16px" }}>
            O que fazemos
          </h2>

          <ul style={{ color: "var(--muted)", paddingLeft: "20px" }}>
            <li>Servidores e universos de Roleplay</li>
            <li>Projetos autorais e experimentais</li>
            <li>Addons, sistemas e experiências customizadas</li>
            <li>Comunidade criativa e colaborativa</li>
          </ul>
        </div>
      </section>

      {/* COMUNIDADE */}
      <section>
        <div className="container">
          <h2 style={{ fontSize: "2rem", marginBottom: "16px" }}>
            Faça parte da comunidade
          </h2>

          <p style={{ color: "var(--muted)", marginBottom: "20px" }}>
            Tudo começa na comunidade. Acompanhe os projetos, participe das
            decisões e ajude a construir o futuro da Blockpixel.
          </p>

          <a
            href="https://discord.gg/ECrCanMANR"
            target="_blank"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              background: "var(--primary)",
              color: "#000",
              borderRadius: "6px",
              fontWeight: "bold",
            }}
          >
            Entrar no Discord
          </a>
        </div>
      </section>

    </main>
  );
              }
