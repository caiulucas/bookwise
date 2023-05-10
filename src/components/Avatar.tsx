import Image, { StaticImageData } from 'next/image';

interface AvatarProps {
  src: string | StaticImageData;
  alt?: string;
}

export function Avatar({ src, alt = 'User avatar' }: AvatarProps) {
  return (
    <div className="rounded-full w-10 h-10 p-px bg-gradient-to-b from-green-50 to-purple-50">
      <Image
        className="rounded-full"
        src={src}
        alt={alt}
        width={40}
        height={40}
      />
    </div>
  );
}
