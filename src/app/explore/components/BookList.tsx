'use client';
import { useState } from 'react';

import { BookCard } from './BookCard';
import { SidePanel } from './SidePanel';

export function BookList() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <ul className="grid grid-cols-3 gap-5 mt-12">
        <li>
          <BookCard read onClick={() => setIsMenuOpen(true)} />
        </li>
        <li>
          <BookCard />
        </li>
        <li>
          <BookCard />
        </li>
        <li>
          <BookCard />
        </li>
        <li>
          <BookCard />
        </li>
        <li>
          <BookCard />
        </li>
      </ul>

      {isMenuOpen && <SidePanel onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}
