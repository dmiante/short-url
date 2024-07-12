import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { cn } from '../lib/utils'
import { ThemeProvider } from '@/components/providers/theme-provider'

const monserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={cn('min-h-screen font-sans antialiased', monserrat.variable)}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
