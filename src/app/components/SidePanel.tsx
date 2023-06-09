import Image from 'next/image';
import Link from 'next/link';

import Icon from '@/components/Icon';
import { MenuOption } from '@/components/MenuOption';

interface SidePanelProps {
  currentPath: '/' | '/explore' | '/profile';
}

export function SidePanel({ currentPath }: SidePanelProps) {
  return (
    <aside
      className="w-58 h-menu rounded-xl px-12 py-10 flex flex-col mx-5 mt-4
      items-center bg-[url('/menu-bg.webp')] sticky top-4"
    >
      <Image src="/logo.svg" alt="BookWise" width={126} height={32} />

      <nav className="mt-16 h-full flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <MenuOption
            title="Início"
            icon="chart-line-up"
            href="/"
            selected={currentPath === '/'}
          />
          <MenuOption
            title="Explorar"
            icon="binoculars"
            href="/explore"
            selected={currentPath === '/explore'}
          />
          <MenuOption
            title="Perfil"
            icon="user"
            href="/profile"
            selected={currentPath === '/profile'}
          />
        </div>
        <Link href="/login" className="font-bold flex items-center gap-3">
          Fazer login <Icon name="sign-in" className="text-green-100 h-5 w-5" />
        </Link>
      </nav>
    </aside>
  );
}
