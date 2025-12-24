import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(postsDirectory);

  return files.map((file) => {
    const filePath = path.join(postsDirectory, file);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: file.replace(".md", ""),
      ...data,
      content,
    };
  });
}
