import MainInput from "@/components/main-input";
import { Toaster } from 'sonner'

export default function Home() {

  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <section className="flex flex-col items-center gap-5 w-full max-w-[512px]">
        <h1 className="text-5xl">Short URL</h1>
        <MainInput />
      </section>
      <Toaster position="bottom-center" />
    </main>
  );
}
