import { Nunito } from 'next/font/google';
import Image from 'next/image';

import './globals.css';
import { SideMenuNav } from './components/SideMenuNav';

interface RootLayoutProps {
  children: React.ReactNode;
}

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'BookWise',
  description: 'Organize sua leitura de forma simples e prática.'
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.className} flex`}>
        <aside
          className="w-58 h-menu rounded-xl px-12 py-10 flex flex-col mx-5 mt-4
          items-center bg-[url('/menu-bg.webp')] sticky top-4"
        >
          <Image src="/logo.svg" alt="BookWise" width={126} height={32} />

          <SideMenuNav />
        </aside>
        {children}
      </body>
    </html>
  );
}
