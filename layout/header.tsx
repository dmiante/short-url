import { ModeToggle } from '@/components/change-theme'
import { Github, LinkIcon } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='px-4 py-2'>
      <nav className='flex items-center justify-between gap-4'>
        <div>
          <Link href='/' className='flex items-center text-2xl'>
            shrt <LinkIcon size={26} color='#E22C7B' strokeWidth={2} />U
          </Link>
        </div>
        <div className='flex items-center gap-4'>
          <ModeToggle />
          <Link
            href='https://github.com/dmiante/short-url'
            rel='noreferrer'
            target='_blank'
          >
            <Github size={32} />
          </Link>
        </div>
      </nav>
    </header>
  )
}
