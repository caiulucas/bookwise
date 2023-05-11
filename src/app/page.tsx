import Icon from '@/components/Icon';

import { BookCard } from './components/BookCard';
import { Comment } from './components/Comment';
import { LastBook } from './components/LastBook';

export default function Home() {
  return (
    <main className="container px-24 py-18">
      <div className="flex items-center gap-3">
        <Icon name="chart-line-up" className="w-8 h-8 text-green-100" />
        <h1>Início</h1>
      </div>

      <div className="flex gap-16 mt-10">
        <div className="flex flex-col gap-10">
          <section>
            <div className="flex justify-between">
              <h2 className="font-normal text-sm mb-4">Sua última leitura </h2>
              <button className="font-bold text-purple-100 flex items-center gap-2">
                Ver todas <Icon name="caret-right" />
              </button>
            </div>
            <LastBook />
          </section>
          <section>
            <h2 className="font-normal text-sm mb-4">
              Atualizações mais recentes
            </h2>
            <ul className="flex flex-col gap-3">
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
          </section>
        </div>

        <aside>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-normal text-sm">Livros populares</h2>
            <button className="font-bold text-purple-100 flex items-center gap-2">
              Ver todos <Icon name="caret-right" />
            </button>
          </div>
          <ul className="flex flex-col gap-3">
            <li>
              <BookCard />
            </li>
            <li>
              <BookCard />
            </li>
            <li>
              <BookCard />
            </li>
            <li>
              <BookCard />
            </li>
          </ul>
        </aside>
      </div>
    </main>
  );
}
