'use client';

import {
  Binoculars,
  BookOpen,
  BookmarkSimple,
  CaretRight,
  ChartLineUp,
  MagnifyingGlass,
  IconProps as PhosphorIconProps,
  Star,
  User,
  X
} from 'phosphor-react';

const icons = {
  'chart-line-up': ChartLineUp,
  'caret-right': CaretRight,
  'magnifying-glass': MagnifyingGlass,
  'book-open': BookOpen,
  bookmark: BookmarkSimple,
  user: User,
  binoculars: Binoculars,
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
