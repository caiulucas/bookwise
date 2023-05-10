import Image from 'next/image';

import githubIcon from '@/assets/icons/github-icon.svg';
import googleIcon from '@/assets/icons/google-icon.svg';
import rocketIcon from '@/assets/icons/rocket-icon.svg';
import { SignInButton } from '@/components/SigninButton';

export default function Home() {
  return (
    <div className="flex h-screen p-4">
      <section
        className="flex-initial w-1/3 bg-cover bg-[url('/cover-image.webp')]
        h-full flex justify-center align-middle rounded-2lg"
      >
        <Image
          src="/logo.svg"
          alt="Bookwise logo"
          width={232}
          height={58}
          className="w-58 h-auto"
        />
      </section>
      <section className="flex-1 flex justify-center items-center">
        <main className="w-88">
          <h1>Boas vindas!</h1>
          <p>Faça seu login ou acesse como visitante.</p>

          <form className="mt-10 flex flex-col gap-4">
            <SignInButton
              icon={googleIcon}
              title="Entrar com Google"
              alt="Ícone do Google"
            />
            <SignInButton
              icon={githubIcon}
              title="Entrar com Github"
              alt="Ícone do Github"
            />
            <SignInButton
              icon={rocketIcon}
              title="Entrar como visitante"
              alt="Ícone de foguete"
            />
          </form>
        </main>
      </section>
    </div>
  );
}
