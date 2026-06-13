import { MetadataRoute } from 'next';

const siteUrl = 'https://portfolio-egb-developers.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date()
    },
    {
      url: `${siteUrl}/work`,
      lastModified: new Date()
    }
  ];
}
