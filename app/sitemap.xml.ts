import { MetadataRoute } from 'next';

const siteUrl = 'https://example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date()
    },
    {
      url: `${siteUrl}/secret-admin-login`,
      lastModified: new Date()
    },
    {
      url: `${siteUrl}/admin/dashboard`,
      lastModified: new Date()
    }
  ];
}
