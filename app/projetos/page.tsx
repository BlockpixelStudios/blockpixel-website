import Link from "next/link";
import { getProjects } from "@/lib/markdown";

export default function ProjetosPage() {
  const projects = getProjects();

  return (
    <main className="container">
      <h1>Projetos</h1>

      <div className="grid">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projetos/${project.slug}`}
          >
            <article className="card">
              {project.status && (
                <span className="badge">
                  {project.status}
                </span>
              )}

              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
