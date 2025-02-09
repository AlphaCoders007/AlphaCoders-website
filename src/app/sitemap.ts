import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.alphacoders.co.in/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority:0.9,
    },
    {
      url: 'https://www.alphacoders.co.in/weimagine',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.alphacoders.co.in/wedesign',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.alphacoders.co.in/wecreate',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}