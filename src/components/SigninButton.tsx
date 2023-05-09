import Image, { StaticImageData } from 'next/image';

interface SignInButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: string | StaticImageData;
  title: string;
  alt?: string;
}

export function SignInButton({
  icon,
  title,
  alt = 'Button icon'
}: SignInButtonProps) {
  return (
    <button
      className="w-full h-18 bg-gray-600 rounded-lg px-6 flex items-center
      gap-5 hover:bg-gray-500 transition-colors duration-200"
    >
      <Image src={icon} alt={alt} className="w-auto h-auto" />
      <p className="font-bold text-lg">{title}</p>
    </button>
  );
}
