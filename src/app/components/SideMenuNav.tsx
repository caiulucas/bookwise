'use client';
import { useEffect, useState } from 'react';

import { MenuOption } from '@/components/MenuOption';

export function SideMenuNav() {
  const [routeName, setRouteName] = useState('');

  useEffect(() => {
    setRouteName(window.location.pathname.split('/').pop() || '');
  }, []);

  return (
    <nav className="mt-16 flex flex-col gap-4">
      <MenuOption
        title="Início"
        icon="chart-line-up"
        href="/"
        selected={routeName === ''}
      />
      <MenuOption
        title="Explorar"
        icon="binoculars"
        href="/explore"
        selected={routeName === 'explore'}
      />
      <MenuOption
        title="Perfil"
        icon="user"
        href="/profile"
        selected={routeName === 'profile'}
      />
    </nav>
  );
}
