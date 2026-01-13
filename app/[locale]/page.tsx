import { getTranslations } from 'next-intl/server';
import Image from "next/image";
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Link } from '@/i18n/routing';

export default async function Home() {
  const t = await getTranslations('home');
  const tCommon = await getTranslations('common');
  const tNvidia = await getTranslations('nvidia');

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex w-full items-center justify-between">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <LanguageSwitcher />
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            {t('title')}
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {t('subtitle')}
          </p>
          <p className="max-w-md text-base leading-8 text-zinc-500 dark:text-zinc-500">
            {t('getStarted')} <code className="rounded bg-zinc-100 px-2 py-1 dark:bg-zinc-800">{t('pageFile')}</code>
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            {tCommon('deploy')}
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {tCommon('documentation')}
          </a>
          <Link
            href="/nvidia"
            className="flex h-12 w-full items-center justify-center rounded-full bg-green-600 px-5 text-white transition-colors hover:bg-green-700 md:w-auto"
          >
            {tNvidia('viewPage')}
          </Link>
        </div>
      </main>
    </div>
  );
}

