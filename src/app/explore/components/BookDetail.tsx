import Image from 'next/image';

import bookImg from '@/assets/Book.jpg';
import Icon from '@/components/Icon';
import { Rating } from '@/components/Rating';

export function BookDetail() {
  return (
    <div className="container bg-gray-700 py-6 px-8 rounded-2lg">
      <div className="flex gap-8">
        <Image
          src={bookImg}
          alt="O Hobbit"
          width={172}
          height={242}
          className="w-auto h-62 rounded-2lg"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h3>O Hobbit</h3>
            <span className="text-gray-400">J.R.R Tolkien</span>
          </div>
          <div className="flex flex-col gap-1">
            <Rating size="md" />
            <span className="text-gray-400 text-sm">3 avaliações</span>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-600 pt-6 grid grid-cols-2">
        <div className="flex items-center gap-4">
          <Icon name="bookmark" className="text-green-100 w-6 h-6" />
          <div className="flex flex-col">
            <span className="text-sm">Categoria</span>
            <h4>Computação, educação</h4>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Icon name="book-open" className="text-green-100 w-6 h-6" />
          <div className="flex flex-col">
            <span className="text-sm">Páginas</span>
            <h4>160</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
