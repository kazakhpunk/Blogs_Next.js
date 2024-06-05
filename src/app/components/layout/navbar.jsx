import Image from "next/image";
import Link from 'next/link';

export default function Navbar() {
  return (
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Blogs
          </Link>
        </nav>
      </header>
  );
}
