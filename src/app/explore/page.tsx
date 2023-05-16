import Icon from '@/components/Icon';

import { BookList } from './components/BookList';
import { Category } from './components/Category';

export default function Explore() {
  return (
    <main className="container px-24 py-18">
      <header>
        <div className="flex justify-between gap-33">
          <div className="flex items-center gap-3 flex-1">
            <Icon name="binoculars" className="w-8 h-8 text-green-100" />
            <h1>Explorar</h1>
          </div>
          <div
            className="border border-gray-500 rounded-sm px-5 flex
            items-center gap-2 w-full flex-1 focus-within:outline outline-1
            outline-green-100"
          >
            <input
              type="text"
              placeholder="Buscar livro ou autor"
              className="bg-transparent placeholder:text-gray-400 w-full h-12
              outline-none peer caret-green-100"
            />
            <button className="text-gray-500 text-xl peer-focus:text-green-100">
              <Icon name="magnifying-glass" />
            </button>
          </div>
        </div>
        <nav className="flex gap-3 mt-10">
          <Category title="Tudo" active />
          <Category title="Computação" />
          <Category title="Educação" />
          <Category title="Fantasia" />
          <Category title="Ficção científica" />
          <Category title="Horror" />
          <Category title="HQs" />
          <Category title="Suspense" />
        </nav>
      </header>

      <section>
        <BookList />
      </section>
    </main>
  );
}
