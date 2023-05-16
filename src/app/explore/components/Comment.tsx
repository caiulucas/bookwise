import { Avatar } from '@/components/Avatar';
import { Rating } from '@/components/Rating';

export function Comment() {
  return (
    <div className="container p-6 bg-gray-700 rounded-lg flex flex-col gap-5">
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

      <p>
        Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
        Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta
        eget nec vitae sit vulputate eget
      </p>
    </div>
  );
}
