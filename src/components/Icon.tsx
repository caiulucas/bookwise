'use client';

import {
  Binoculars,
  CaretRight,
  ChartLineUp,
  IconProps as PhosphorIconProps,
  Star,
  User
} from 'phosphor-react';

const icons = {
  'chart-line-up': ChartLineUp,
  'caret-right': CaretRight,
  user: User,
  binoculars: Binoculars,
  star: Star
};

export type IconName = keyof typeof icons;

interface IconProps extends PhosphorIconProps {
  name: IconName;
}

export default function Icon({ name, ...props }: IconProps) {
  const Icon = icons[name];

  return <Icon {...props} />;
}
