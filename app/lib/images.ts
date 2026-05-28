import fs from "fs";
import path from "path";

function filenameToAlt(filename: string, suburb: string): string {
  const base = filename
    .replace(/\.(jpe?g|png|webp)$/i, "")
    .replace(/^built-in-melbourne-/, "")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return `${base}, ${suburb.toLowerCase()}: built in melbourne`;
}

export function getProjectImages(
  folder: string,
  suburb: string
): { src: string; alt: string }[] {
  const dir = path.join(process.cwd(), "public", "images", "projects", folder);

  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
    .sort()
    .map((file) => ({
      src: `/images/projects/${folder}/${file}`,
      alt: filenameToAlt(file, suburb),
    }));
}
