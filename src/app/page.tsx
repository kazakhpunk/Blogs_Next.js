import Image from "next/image";

export default function Home() {
  return (
    <main className ='flex flex-col mt-200'>
      <div className='p-4 flex flex-col text-center justify-center py-16'>
        <h2 className='text-2xl mb-2'>Welcome to Blog App!</h2>
        <p>This is the home page.</p>
      </div>
    </main>
  );
}
