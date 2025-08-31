import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="shadow-md" style={{ backgroundColor: '#01277A' }}>
      <div className="container mx-auto px-4 py-4 flex items-center">
        <div className="bg-white p-1 rounded-md mr-4">
          <Image
            src="/logo-santacruz.png"
            alt="Brasão de Santa Cruz dos Milagagres"
            width={32}
            height={32}
          />
        </div>
        <Link href="/" className="text-2xl font-bold text-white">
          Visite Santa Cruz dos Milagres
        </Link>
        <nav className="ml-auto">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-white hover:text-gray-300 transition-colors">Início</Link>
            </li>
            <li>
              <Link href="/santuario" className="text-white hover:text-gray-300 transition-colors">Santuário</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-b border-white/20"></div>
    </header>
  );
}
