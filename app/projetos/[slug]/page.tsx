import { getProjects } from "@/lib/markdown";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export default function ProjetoPage({ params }: any) {
  const projects = getProjects();
  const project = projects.find((p: any) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="container">
      <h1>{project.title}</h1>

      <p style={{ color: "var(--muted)", marginBottom: "20px" }}>
        Status: {project.status}
      </p>

      <ReactMarkdown>
        {project.content}
      </ReactMarkdown>
    </main>
  );
}
