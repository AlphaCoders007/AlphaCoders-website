import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.alphacoders.ai/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority:1,
    },
    {
      url: 'https://www.alphacoders.ai/weimagine ',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.alphacoders.ai/wedesign',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.alphacoders.ai/wecreate',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}