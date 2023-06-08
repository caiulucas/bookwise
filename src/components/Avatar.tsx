import Image, { StaticImageData } from 'next/image';

interface AvatarProps {
  src: string | StaticImageData;
  alt?: string;
  size?: 'md' | 'lg';
}

export function Avatar({ src, alt = 'User avatar', size = 'md' }: AvatarProps) {
  const imgSize = size === 'md' ? 40 : 72;
  const imgStyleSize = size === 'md' ? 'w-10 h-10' : 'w-18 h-18';

  return (
    <div
      className={`rounded-full ${imgStyleSize} p-px bg-gradient-to-b from-green-50 to-purple-50`}
    >
      <Image
        className="rounded-full"
        src={src}
        alt={alt}
        width={imgSize}
        height={imgSize}
      />
    </div>
  );
}
