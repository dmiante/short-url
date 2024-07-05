import Hero from '@/components/hero'
import MainForm from '@/components/main-form'
import Header from '@/layout/header'
import { Toaster } from 'sonner'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='mx-auto w-full max-w-screen-sm flex-1 p-4'>
        <section className='flex w-full max-w-[512px] flex-col items-center gap-6'>
          <Hero />
          <MainForm />
        </section>
        <Toaster position='bottom-center' />
      </main>
    </div>
  )
}
