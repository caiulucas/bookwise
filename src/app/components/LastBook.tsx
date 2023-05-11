import Image from 'next/image';

import bookImg from '@/assets/Book.jpg';
import { AuthorName } from '@/components/AuthorName';
import { Rating } from '@/components/Rating';

export function LastBook() {
  return (
    <div className="container bg-gray-600 rounded-lg py-5 px-6 flex gap-6">
      <Image
        src={bookImg}
        alt="O Hobbit"
        width={108}
        height={152}
        className="w-26 h-auto rounded-sm"
      />
      <div className="w-full">
        <div className="flex justify-between items-center">
          <p>Há 2 dias</p>
          <Rating />
        </div>
        <h4 className="mt-3">O Hobbit</h4>
        <AuthorName>J.R.R Tolkien</AuthorName>
        <p className="mt-6">
          Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
          Penatibus id vestibulum imperdiet a at imperdiet lectu...
        </p>
      </div>
    </div>
  );
}
