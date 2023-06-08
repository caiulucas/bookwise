import Icon, { IconName } from '@/components/Icon';

interface PageTitleProps {
  icon: IconName;
  children: React.ReactNode;
}

export function PageTitle({ icon, children }: PageTitleProps) {
  return (
    <div className="flex items-center gap-3">
      <Icon name={icon} className="w-8 h-8 text-green-100" />
      <h1>{children}</h1>
    </div>
  );
}
