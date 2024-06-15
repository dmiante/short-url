import MainInput from '@/components/main-input'
import { Toaster } from 'sonner'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <section className='flex w-full max-w-[512px] flex-col items-center gap-5'>
        <h1 className='text-5xl'>Short URL</h1>
        <MainInput />
      </section>
      <Toaster position='bottom-center' />
    </main>
  )
}
