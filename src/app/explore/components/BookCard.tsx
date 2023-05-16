import Image from 'next/image';

import bookImg from '@/assets/Book.jpg';
import { Rating } from '@/components/Rating';

interface BookCardProps extends React.HTMLAttributes<HTMLButtonElement> {
  read?: boolean;
}

export function BookCard({ read = false, ...props }: BookCardProps) {
  return (
    <button
      className="container bg-gray-700 py-4 px-5 rounded-lg flex gap-5 relative overflow-hidden"
      {...props}
    >
      {read && (
        <span
          className="absolute top-0 right-0 bg-green-300 text-green-100
          py-1 px-3 rounded-bl-sm font-bold uppercase"
        >
          Lido
        </span>
      )}
      <Image
        src={bookImg}
        width={108}
        height={152}
        alt="O Hobbit"
        className="w-26 h-auto rounded-sm"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h4>O Hobbit</h4>
          <span className="text-gray-400 text-sm">J.R.R Tolkien</span>
        </div>
        <Rating />
      </div>
    </button>
  );
}
