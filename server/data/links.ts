'use server'

import db from '@/lib/db.server'
import { nanoid } from 'nanoid'
import { z } from 'zod'
import { formSchema } from '../schemas'
import { Link } from '@/types/link.type'

export async function createUrl(values: z.infer<typeof formSchema>): Promise<Link> {
    const shortUrl = nanoid(7)
    const savedUrl = await db.link.create({
      data: {
        ...values,
        slug: shortUrl
      }
    })
    return savedUrl
}
