import Image from 'next/image';

import bookImg from '@/assets/Book.jpg';
import { AuthorName } from '@/components/AuthorName';
import { Avatar } from '@/components/Avatar';
import { Rating } from '@/components/Rating';

import { Box } from './Box';

export function Comment() {
  return (
    <Box>
      <header className="flex justify-between">
        <div className="flex gap-4">
          <Avatar src="https://github.com/Vianjus.png" />
          <div>
            <p>Vinicius Anjos</p>
            <span className="text-gray-400 text-sm">Hoje</span>
          </div>
        </div>
        <Rating />
      </header>
      <div className="mt-4 flex gap-5">
        <Image
          src={bookImg}
          width={108}
          height={152}
          alt="O Hobbit"
          className="rounded-sm w-26 h-auto"
        />
        <div className="flex flex-col gap-5">
          <div>
            <h4>O Hobbit</h4>
            <AuthorName>J.R.R Tolkien</AuthorName>
          </div>

          <p>
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh...
          </p>
        </div>
      </div>
    </Box>
  );
}
