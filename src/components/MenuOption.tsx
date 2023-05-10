'use client';
import Link from 'next/link';
import { Binoculars, ChartLineUp } from 'phosphor-react';

const icons = {
  binoculars: <Binoculars className="w-6 h-6" />,
  chartLineUp: <ChartLineUp className="w-6 h-6" />
};

interface MenuOptionProps {
  icon: keyof typeof icons;
  href: string;
  title: string;
  selected?: boolean;
}

const selectedLinkStyle =
  'before:bg-gradient-to-b from-green-50 to-purple-50 text-gray-100 font-bold';

export function MenuOption({ href, title, icon, selected }: MenuOptionProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 before:content-[''] before:h-6
      before:w-1 before:rounded-full  ${
        selected ? selectedLinkStyle : 'text-gray-400'
      }`}
    >
      {icons[icon]}
      <span>{title}</span>
    </Link>
  );
}
