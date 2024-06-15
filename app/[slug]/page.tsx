import { getSlug } from '@/server/data/links'
import { notFound, permanentRedirect } from 'next/navigation'

export default async function SlugPage({
  params
}: {
  params: { slug: string }
}) {
  const { slug } = params

  const slugUrl = await getSlug(slug)
  if (!slugUrl) {
    notFound()
  }

  return permanentRedirect(slugUrl.url)
}
