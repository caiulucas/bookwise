import { PageTitle } from '../components/PageTitle';
import { SearchInput } from '../components/SearchInput';
import { BookList } from './components/BookList';
import { Category } from './components/Category';

export default function Explore() {
  return (
    <main className="container px-24 py-18">
      <header>
        <div className="grid grid-cols-2 justify-between">
          <PageTitle icon="binoculars">Explorar</PageTitle>
          <SearchInput placeholder="Buscar livro ou autor" />
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
