import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-screen bg-[var(--foreground)] p-4 flex items-center justify-start space-x-4">
      <Image src={logo} alt="Logo" width={80} height={60} />
      <nav className="space-x-4 text-[var(--background)] text-2xl">
        <Link href="/" className="hover:underline">
          <h6 className="inline">Home</h6>
        </Link>
        <Link href="/about" className="hover:underline">
          <h6 className="inline">About</h6>
        </Link>
        <Link href="/contact" className="hover:underline">
          <h6 className="inline">Contact</h6>
        </Link>
      </nav>
    </header>
  );
}
