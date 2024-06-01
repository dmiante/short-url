import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'
 
export default function NotFound() {
  return (
  <section>
    <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
      <div>
        <p className="text-sm font-medium">
          404 error
        </p>
        <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
          We can&apos;t find that page
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex items-center mt-6 gap-x-3">
          <Button asChild
            className="flex items-center justify-center tracking-wide w-1/2 px-5 py-2"
            variant={'secondary'}
            >
              <Link href="/">
                Take me home <Home className='ml-2 h-4 w-4'/>
              </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
  )
}