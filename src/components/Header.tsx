import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md border-b-4 border-blue-700">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <div className="bg-blue-700 h-8 w-8 rounded-full mr-4"></div>
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Visite Santa Cruz dos Milagres
        </Link>
        <nav className="ml-auto">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-700 transition-colors">Início</Link>
            </li>
            <li>
              <Link href="/santuario" className="hover:text-blue-700 transition-colors">Santuário</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
