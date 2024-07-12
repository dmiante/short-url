import { ModeToggle } from '@/components/change-theme'
import { Github } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='px-4 py-2'>
      <nav className='flex items-center justify-between gap-4'>
        <div>
          <Link href='/' className='text-2xl'>
            shrt<span className='font-bold'>🔗U</span>
          </Link>
        </div>
        <div className='flex items-center gap-4'>
          <ModeToggle />
          <Link
            href='https://github.com/dmiante/short-url'
            rel='noreferrer'
            target='_blank'
          >
            <Github size={36} />
          </Link>
        </div>
      </nav>
    </header>
  )
}
