import { Avatar } from '@/components/Avatar';

import { PageTitle } from '../components/PageTitle';
import { SearchInput } from '../components/SearchInput';
import { SidePanel } from '../components/SidePanel';
import { ProfileBookCard } from './components/ProfileBookCard';
import { ProfileInfo } from './components/ProfileInfo';

export default function Profile() {
  return (
    <>
      <SidePanel currentPath="/profile" />
      <main className="container px-24 py-18">
        <PageTitle icon="user">Perfil</PageTitle>
        <div className="flex gap-16 mt-10">
          <div>
            <SearchInput placeholder="Buscar livro avaliado" />

            <div className="mt-8 flex flex-col gap-6">
              <section className="flex flex-col gap-2">
                <span>Há 2 dias</span>
                <ProfileBookCard />
              </section>
              <section className="flex flex-col gap-2">
                <span>Há 4 meses</span>
                <ProfileBookCard />
              </section>
              <section className="flex flex-col gap-2">
                <span>Há 6 meses</span>
                <ProfileBookCard />
              </section>
            </div>
          </div>
          <aside
            className="container max-w-xxs h-fit flex flex-col items-center gap-8
          border-l border-l-gray-700"
          >
            <div className="flex flex-col items-center">
              <Avatar src="https://github.com/caiulucas.png" size="lg" />
              <h2 className="text-gray-100">Caio Lucas</h2>
              <span className="text-gray-400 text-sm">membro desde 2023</span>
            </div>

            <div className="w-8 h-1 rounded-full bg-gradient-to-r from-green-50 to-purple-50" />

            <div className="flex flex-col gap-10 mb-5">
              <ProfileInfo
                icon="book-open"
                title="Páginas lidas"
                value="3853"
              />
              <ProfileInfo
                icon="bookmark"
                title="Livros avaliados"
                value="10"
              />
              <ProfileInfo icon="user" title="Autores lidos" value="8" />
              <ProfileInfo
                icon="bookmark"
                title="Categoria mais lida"
                value="Computação"
              />
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
