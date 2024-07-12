import { LinkIcon } from 'lucide-react'
export default function Hero() {
  return (
    <div className='flex flex-col items-center gap-6'>
      <h1 className='flex text-5xl'>
        shrt <LinkIcon size={54} color='#E22C7B' strokeWidth={2} />U
      </h1>
      <div className='flex flex-col items-center'>
        <h3>Shorten your URLs easy and fast.</h3>
        <span>These will be available for 5 minutes.</span>
      </div>
    </div>
  )
}
