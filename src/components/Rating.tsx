import Icon from './Icon';

interface RatingProps {
  size?: 'sm' | 'md' | 'lg';
}

export function Rating({ size = 'sm' }: RatingProps) {
  const sizeStyle = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-7 h-7'
  };

  return (
    <div className="flex gap-1">
      <Icon
        name="star"
        weight="fill"
        className={`text-purple-100 ${sizeStyle[size]}`}
      />
      <Icon
        name="star"
        weight="fill"
        className={`text-purple-100 ${sizeStyle[size]}`}
      />{' '}
      <Icon
        name="star"
        weight="fill"
        className={`text-purple-100 ${sizeStyle[size]}`}
      />{' '}
      <Icon
        name="star"
        weight="fill"
        className={`text-purple-100 ${sizeStyle[size]}`}
      />{' '}
      <Icon name="star" className={`text-purple-100 ${sizeStyle[size]}`} />
    </div>
  );
}
