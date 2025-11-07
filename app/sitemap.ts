import { MetadataRoute } from 'next'

const BASE_URL = 'https://ahmadhassan.dev'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
    },
  ]
}


