import MainInput from "@/components/main-input";

export default function Home() {

  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <section className="flex flex-col items-center gap-5 w-full max-w-[512px]">
        <h1 className="text-5xl">Short URL</h1>
        <MainInput />
        <a href="#" className="text-xl hover:underline">Your short URL here</a>
      </section>
    </main>
  );
}
