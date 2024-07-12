import Hero from '@/components/hero'
import MainForm from '@/components/main-form'
import Footer from '@/layout/footer'
import Header from '@/layout/header'
import { Toaster } from 'sonner'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='mx-auto flex w-full max-w-screen-sm flex-1 flex-col items-center p-4'>
        <section className='flex w-full max-w-[512px] flex-col items-center gap-6 pt-28'>
          <Hero />
          <MainForm />
        </section>
        <Toaster position='bottom-center' />
      </main>
      <Footer />
    </div>
  )
}
