import Icon, { IconName } from '@/components/Icon';

interface ProfileInfoProps {
  icon: IconName;
  title: string;
  value: string;
}

export function ProfileInfo({ icon, title, value }: ProfileInfoProps) {
  return (
    <div className="flex gap-5 items-center">
      <Icon name={icon} className="text-green-100 w-8 h-8" />
      <div>
        <h4 className="text-gray-200">{value}</h4>
        <p className="text-sm text-gray-300">{title}</p>
      </div>
    </div>
  );
}
