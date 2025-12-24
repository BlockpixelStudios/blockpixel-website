import fs from "fs";
import path from "path";
import matter from "gray-matter";

function readMarkdown(dir: string) {
  const directory = path.join(process.cwd(), dir);
  const files = fs.readdirSync(directory);

  return files.map((file) => {
    const filePath = path.join(directory, file);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: file.replace(".md", ""),
      ...data,
      content,
    };
  });
}

export function getProjects() {
  return readMarkdown("content/projects");
}

export function getBlogPosts() {
  return readMarkdown("content/blog");
}
