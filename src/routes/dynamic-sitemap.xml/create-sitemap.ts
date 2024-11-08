export function createSitemap(urls: { loc: string; priority: number }[]): string {
  const urlset = urls
    .map(
      ({ loc, priority }) => `
    <url>
      <loc>${loc}</loc>
      <priority>${priority}</priority>
    </url>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urlset}
  </urlset>`;
} 