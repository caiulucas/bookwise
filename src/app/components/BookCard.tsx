import Image from 'next/image';

import bookImg from '@/assets/Book.jpg';
import { Rating } from '@/components/Rating';

export function BookCard() {
  return (
    <div className="w-81 bg-gray-700 py-4 px-5 rounded-lg flex gap-5">
      <Image
        src={bookImg}
        alt="O Hobbit"
        width={64}
        height={94}
        className="rounded-sm"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h4>O Hobbit</h4>
          <span className="text-gray-400 text-sm">J.R.R Tolkien</span>
        </div>
        <Rating />
      </div>
    </div>
  );
}
