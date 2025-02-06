import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://alphacodersinc.com/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority:0.9,
    },
    {
      url: 'https://alphacodersinc.com/weimagine',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://alphacodersinc.com/wedesign',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://alphacodersinc.com/wecreate',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}