import { Nunito } from 'next/font/google';
import './globals.css';
import Image from 'next/image';

import { MenuOption } from '@/components/MenuOption';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'BookWise',
  description: 'Organize sua leitura de forma simples e prática.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.className} flex`}>
        <aside
          className="w-58 h-menu rounded-xl px-12 py-10 flex flex-col mx-5
          items-center bg-[url('/menu-bg.webp')] sticky top-4"
        >
          <Image src="/logo.svg" alt="BookWise" width={126} height={32} />
          <nav className="mt-16 flex flex-col gap-4">
            <MenuOption title="Início" icon="chart-line-up" href="/" selected />
            <MenuOption title="Explorar" icon="binoculars" href="/explore" />
          </nav>
        </aside>
        {children}
      </body>
    </html>
  );
}
