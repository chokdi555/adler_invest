import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://adlerinvest.de'
  const now = new Date()

  const routes = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/immobilien', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/immobilien/kapitalanlage', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/immobilien/frankfurt', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/immobilien/rhein-main', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/immobilien/immobilien-unter-dem-marktwert', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/immobilien/steueroptimierung', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/versicherungen', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/versicherungen/berufsunfaehigkeit', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/versicherungen/krankenversicherung', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/versicherungen/haftpflicht', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/versicherungen/altersvorsorge', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/versicherungen/hausrat', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/versicherungen/kfz', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/versicherungen/rechtsschutz', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/versicherungen/reiseversicherung', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/blog/kapitalanlage-immobilie-erklaert', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/blog/steuer-sparen-immobilien', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/blog/berufsunfaehigkeit-versicherung', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/blog/rechtsschutz-wann-lohnt-es-sich', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/blog/immobilien-frankfurt-kaufen', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/blog/immobilien-unter-marktwert', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/blog/immobilien-ohne-eigenkapital', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/ueber-uns', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/kontakt', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/presse', priority: 0.6, changeFrequency: 'monthly' as const },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
