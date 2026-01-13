'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: 'en' | 'vi') => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLocale('en')}
        disabled={isPending}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          locale === 'en'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale('vi')}
        disabled={isPending}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
          locale === 'vi'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
        }`}
      >
        VI
      </button>
    </div>
  );
}

