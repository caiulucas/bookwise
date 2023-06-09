import { Nunito } from 'next/font/google';

import './globals.css';

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
      <body className={`${nunito.className} flex`}>{children}</body>
    </html>
  );
}
