'use client';

import {
  Binoculars,
  BookOpen,
  BookmarkSimple,
  Books,
  CaretRight,
  ChartLineUp,
  Check,
  MagnifyingGlass,
  IconProps as PhosphorIconProps,
  SignIn,
  Star,
  User,
  UserList,
  X
} from 'phosphor-react';

const icons = {
  binoculars: Binoculars,
  bookmark: BookmarkSimple,
  'book-open': BookOpen,
  books: Books,
  'caret-right': CaretRight,
  'chart-line-up': ChartLineUp,
  check: Check,
  'magnifying-glass': MagnifyingGlass,
  user: User,
  'user-list': UserList,
  'sign-in': SignIn,
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
