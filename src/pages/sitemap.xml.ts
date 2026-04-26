import profile from "../lib/profile";
import { collection } from "../lib/content";

export const prerender = true;

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

export async function GET() {
  const publications = collection(
    import.meta.glob("../content/publications/*.md", { eager: true }),
  ).filter((entry) => entry.status !== "To be submitted");
  const notes = collection(import.meta.glob("../content/notes/*.md", { eager: true }));
  const paths = [
    "/",
    ...publications.map((entry) => `/publications/${entry.slug}/`),
    ...notes.map((entry) => `/notes/${entry.slug}/`),
  ];

  const urls = paths
    .map((path) => {
      const loc = new URL(path, profile.siteUrl).toString();
      return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n  </url>`;
    })
    .join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
