import Image from 'next/image';

import bookImg from '@/assets/Book.jpg';
import { AuthorName } from '@/components/AuthorName';
import { Rating } from '@/components/Rating';

export function ProfileBookCard() {
  return (
    <div className="container bg-gray-700 rounded-lg py-5 px-6">
      <div className="flex gap-6">
        <Image
          src={bookImg}
          alt="O Hobbit"
          width={108}
          height={152}
          className="w-26 h-auto rounded-sm"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="mt-3">O Hobbit</h4>
            <AuthorName>J.R.R Tolkien</AuthorName>
          </div>
          <Rating />
        </div>
      </div>
      <p className="mt-6">
        Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
        Penatibus id vestibulum imperdiet a at imperdiet lectu...
      </p>
    </div>
  );
}
