import * as db from '$lib/server/db';

const site = "https://verstache.ru";
const pages = ["about", "layout", "portfolio"];

export async function GET({ locals } : {locals:any} ) {
  const layout = await db.getPosts(locals, 1, '');

	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
            <url>
                <loc>${site}</loc>
                <changefreq>always</changefreq>
                <priority>0.5</priority>
            </url>
            ${pages.map((page:string) => `
            <url>
              <loc>${site}/${page}</loc>
              <changefreq>daily</changefreq>
              <priority>0.5</priority>
            </url>
            `).join('')}
            ${layout.map((post:{slug: string, publication: boolean}) => !post.publication ? null : `
            <url>
              <loc>${site}/layout/${post.slug}</loc>
              <changefreq>daily</changefreq>
              <priority>0.7</priority>
            </url>
            `).join('')}
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml',
			},
		},
	);
}