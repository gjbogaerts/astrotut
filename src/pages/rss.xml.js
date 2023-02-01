import rss, {pagesGlobToRssItems, pagesGlogToRssItems} from '@astrojs/rss';

export async function get() {
    return rss({
        title: 'Astro learning blog',
        description: 'My journey learning Astro',
        site: 'https://gjb-tut-astro.netlify.app/',
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`,
    });
}