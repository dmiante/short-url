import { Github } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex items-center justify-between px-4 py-2'>
      <Link href='/' className='text-2xl'>
        Short<span className='font-bold'>URL</span>
      </Link>
      <Link href='https://github.com/dmiante/short-url'>
        <Github size={36} />
      </Link>
    </header>
  )
}
