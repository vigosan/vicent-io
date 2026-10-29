import { MetadataRoute } from 'next'
import { projects } from './projects'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://vicent.io',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `https://vicent.io/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}