import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='mx-auto flex w-full justify-center p-4 text-lg text-muted-foreground'>
      <p>
        Built by{' '}
        <Link
          href='https://github.com/dmiante'
          className='hover:underline'
          rel='noreferrer'
          target='_blank'
        >
          Dmiante 🦁
        </Link>
      </p>
    </footer>
  )
}
