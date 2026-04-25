export type EntryFrontmatter = {
  title: string;
  tabLabel?: string;
  subtitle?: string;
  date?: string;
  status?: string;
  href?: string;
  repositoryHref?: string;
  authors?: string;
  journal?: string;
  summary?: string;
  dateWritten?: string;
  readingTime?: string;
  figureImage?: string;
  figureAlt?: string;
  figureCaption?: string;
  figureSource?: string;
  visual?: string;
  venue?: string;
  order?: number;
  tags?: string[];
};

export type MarkdownModule = {
  frontmatter: EntryFrontmatter;
  Content: any;
};

export type SiteEntry = EntryFrontmatter & {
  slug: string;
  Component: any;
};

export function collection(modules: Record<string, MarkdownModule>): SiteEntry[] {
  return Object.entries(modules)
    .map(([path, module]) => ({
      ...module.frontmatter,
      slug: path.split("/").pop()?.replace(/\.md$/, "") ?? path,
      Component: module.Content,
    }))
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

export function firstEntry(modules: Record<string, MarkdownModule>): SiteEntry {
  const [entry] = collection(modules);

  if (!entry) {
    throw new Error("Expected at least one Markdown entry.");
  }

  return entry;
}
