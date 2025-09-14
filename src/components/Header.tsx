import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-[#01277A] text-white shadow-md">
      <div className="container mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-white p-1 rounded-md">
            <Image
              src="/logo-santacruz.png"
              alt="Brasão de Santa Cruz dos Milagres"
              width={80}
              height={80}
            />
          </div>
          <Link href="/" className="text-2xl font-bold">
            Visite Santa Cruz dos Milagres
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-300 transition-colors">Início</Link>
            </li>
            <li>
              <Link href="/santuario" className="hover:text-gray-300 transition-colors">Santuário</Link>
            </li>
            <li>
              <Link href="/pontos-turisticos" className="hover:text-gray-300 transition-colors">Pontos Turísticos</Link>
            </li>
            <li>
              <Link href="/festejos" className="hover:text-gray-300 transition-colors">Festejos</Link>
            </li>
             <li>
              <Link href="/como-chegar" className="hover:text-gray-300 transition-colors">Como Chegar</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-b border-white/20"></div>
    </header>
  );
}
