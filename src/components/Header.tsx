import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Visite Santa Cruz dos Milagres
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-slate-200 transition-colors">Início</Link>
            </li>
            <li>
              <Link href="/santuario" className="hover:text-slate-200 transition-colors">Santuário</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
