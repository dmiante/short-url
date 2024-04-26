import { NextResponse } from 'next/server'
import db from '../../lib/db.server'
import {nanoid} from 'nanoid'


export async function POST(req: Request) {
  try {
    const shortUrl = nanoid(7)
    const data = await req.json()
    data.slug = shortUrl
    const savedUrl = await db.link.create({
      data
    })
    return NextResponse.json(savedUrl)
  } catch (error) {
    console.error('Error with shorten url:', error)
  }
}
