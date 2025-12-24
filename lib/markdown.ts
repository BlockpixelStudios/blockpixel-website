import fs from "fs";
import path from "path";
import matter from "gray-matter";

/* =========================
   TIPOS
========================= */

export interface MarkdownItem {
  slug: string;
  title: string;
  date?: string;
  description?: string;
  status?: string; // 👈 ADICIONE ISSO
  content: string;
}

/* =========================
   FUNÇÃO BASE
========================= */

function readMarkdown(dir: string): MarkdownItem[] {
  const directoryPath = path.join(process.cwd(), dir);

  if (!fs.existsSync(directoryPath)) return [];

  const files = fs.readdirSync(directoryPath);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const fullPath = path.join(directoryPath, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContents);

      return {
        slug: file.replace(/\.md$/, ""),
        title: data.title ?? "Sem título",
        date: data.date,
        description: data.description,
        content,
      };
    });
}

/* =========================
   BLOG
========================= */

export function getBlogPosts(): MarkdownItem[] {
  return readMarkdown("content/blog");
}

export function getBlogPostBySlug(slug: string): MarkdownItem | undefined {
  return getBlogPosts().find((post) => post.slug === slug);
}

/* =========================
   PROJETOS
========================= */

export function getProjects(): MarkdownItem[] {
  return readMarkdown("content/projetos");
}

export function getProjectBySlug(slug: string): MarkdownItem | undefined {
  return getProjects().find((project) => project.slug === slug);
}
