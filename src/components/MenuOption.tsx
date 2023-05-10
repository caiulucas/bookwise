import Link from 'next/link';

import Icon, { IconName } from './Icon';

interface MenuOptionProps {
  icon: IconName;
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
      <Icon name={icon} className="w-6 h-6" />
      <span>{title}</span>
    </Link>
  );
}
