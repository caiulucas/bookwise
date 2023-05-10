import Icon from './Icon';

export function Rating() {
  return (
    <div className="flex gap-1">
      <Icon name="star" weight="fill" className="text-purple-100 w-4 h-4" />
      <Icon name="star" weight="fill" className="text-purple-100 w-4 h-4" />
      <Icon name="star" weight="fill" className="text-purple-100 w-4 h-4" />
      <Icon name="star" weight="fill" className="text-purple-100 w-4 h-4" />
      <Icon name="star" className="text-purple-100 w-4 h-4" />
    </div>
  );
}
