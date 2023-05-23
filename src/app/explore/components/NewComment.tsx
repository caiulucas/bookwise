import { Avatar } from '@/components/Avatar';
import Icon from '@/components/Icon';
import { Rating } from '@/components/Rating';

export function NewComment() {
  return (
    <div className="container p-6 bg-gray-700 rounded-lg flex flex-col">
      <header className="flex justify-between">
        <div className="flex gap-4 items-center">
          <Avatar src="https://github.com/Vianjus.png" />
          <h4>Vinicius Anjos</h4>
        </div>
        <Rating size="lg" />
      </header>

      <textarea
        maxLength={300}
        placeholder="Escreva sua avaliação"
        className="bg-gray-800 rounded-sm border border-gray-600 px-5 py-4
        placeholder:text-gray-400 text-gray-200 focus:outline outline-1
        outline-green-100 caret-green-100 h-41 resize-none mt-6"
      />
      <div className="self-end flex gap-2 mt-3">
        <button
          className="text-purple-100 w-10 h-10 bg-gray-600 rounded-sm
        flex items-center justify-center"
        >
          <Icon name="x" className="w-6 h-6" />
        </button>
        <button
          className="text-green-100 w-10 h-10 bg-gray-600 rounded-sm
        flex items-center justify-center"
        >
          <Icon name="check" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
