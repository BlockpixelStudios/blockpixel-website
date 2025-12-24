import { getProjects } from "@/lib/markdown";
import Link from "next/link";

export default function ProjetosPage() {
  const projects = getProjects();

  return (
    <main className="container">
      <h1>Projetos</h1>

      <p style={{ color: "var(--muted)", marginTop: "10px" }}>
        Alguns dos universos e ideias que estamos construindo na Blockpixel.
      </p>

      <div style={{ marginTop: "40px" }}>
        {projects.map((project: any) => (
          <article
            key={project.slug}
            style={{
              padding: "24px",
              border: "1px solid #222",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            <h2>{project.title}</h2>

            <p style={{ color: "var(--muted)", margin: "8px 0" }}>
              Status: {project.status}
            </p>

            <Link href={`/projetos/${project.slug}`}>
              Ver projeto →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
