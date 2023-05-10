import Icon from '@/components/Icon';

import { Comment } from './components/Comment';

export default function Home() {
  return (
    <main className="container px-24 py-18">
      <div className="flex items-center gap-3">
        <Icon name="chart-line-up" className="w-8 h-8 text-green-100" />
        <h1>Início</h1>
      </div>

      <section className="mt-10">
        <h2 className="font-normal text-sm mb-4">Atualizações mais recentes</h2>
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
    </main>
  );
}
