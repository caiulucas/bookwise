'use client';

import {
  Binoculars,
  BookOpen,
  BookmarkSimple,
  CaretRight,
  ChartLineUp,
  Check,
  MagnifyingGlass,
  IconProps as PhosphorIconProps,
  Star,
  User,
  X
} from 'phosphor-react';

const icons = {
  binoculars: Binoculars,
  bookmark: BookmarkSimple,
  'book-open': BookOpen,
  'caret-right': CaretRight,
  'chart-line-up': ChartLineUp,
  check: Check,
  'magnifying-glass': MagnifyingGlass,
  user: User,
  star: Star,
  x: X
};

export type IconName = keyof typeof icons;

interface IconProps extends PhosphorIconProps {
  name: IconName;
}

export default function Icon({ name, ...props }: IconProps) {
  const Icon = icons[name];

  return <Icon {...props} />;
}
