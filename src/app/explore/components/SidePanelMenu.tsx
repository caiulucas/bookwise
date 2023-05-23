import Icon from '@/components/Icon';

import { BookDetail } from './BookDetail';
import { Comment } from './Comment';
import { NewComment } from './NewComment';

interface SidePanelMenuProps {
  onClose: () => void;
}

export function SidePanelMenu({ onClose }: SidePanelMenuProps) {
  return (
    <aside
      className="absolute top-0 right-0 w-2/5 bg-gray-800 h-screen
      py-6 px-12 overflow-y-auto flex flex-col"
    >
      <button onClick={onClose} className="self-end mb-4">
        <Icon name="x" className="w-6 h-6 text-gray-400" />
      </button>
      <BookDetail />

      <div className="flex justify-between items-center mt-10 mb-4">
        <span className="text-sm">Avaliações</span>
        <button className="font-bold text-purple-100">Avaliar</button>
      </div>

      <ul className="flex flex-col gap-3">
        <li>
          <NewComment />
        </li>
        <li>
          <Comment />
        </li>
        <li>
          <Comment />
        </li>
        <li>
          <Comment />
        </li>
        <li>
          <Comment />
        </li>
      </ul>
    </aside>
  );
}
