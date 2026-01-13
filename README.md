This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), configured with **Tailwind CSS** and **next-intl** for internationalization (English and Vietnamese).

## Features

- ✅ Next.js 16 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Internationalization (i18n) with next-intl
- ✅ English and Vietnamese language support
- ✅ Language switcher component

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The app will automatically redirect to the default locale (English) at `/en`.

You can access:
- English: [http://localhost:3000/en](http://localhost:3000/en)
- Vietnamese: [http://localhost:3000/vi](http://localhost:3000/vi)

## Project Structure

```
├── app/
│   ├── [locale]/          # Locale-specific routes
│   │   ├── layout.tsx     # Layout with i18n provider
│   │   └── page.tsx       # Home page with translations
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles with Tailwind
├── components/
│   └── LanguageSwitcher.tsx  # Language switcher component
├── messages/              # Translation files
│   ├── en.json           # English translations
│   └── vi.json           # Vietnamese translations
├── i18n/
│   └── routing.ts        # i18n routing configuration
├── i18n.ts               # i18n request configuration
└── middleware.ts         # Middleware for locale detection
```

## Adding Translations

To add new translations, edit the JSON files in the `messages/` directory:

- `messages/en.json` - English translations
- `messages/vi.json` - Vietnamese translations

Then use them in your components:

**Server Components:**
```tsx
import { getTranslations } from 'next-intl/server';

export default async function MyPage() {
  const t = await getTranslations('common');
  return <h1>{t('welcome')}</h1>;
}
```

**Client Components:**
```tsx
'use client';
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('common');
  return <h1>{t('welcome')}</h1>;
}
```

## Language Switcher

The `LanguageSwitcher` component is already included in the home page. You can use it in any component:

```tsx
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function MyPage() {
  return (
    <div>
      <LanguageSwitcher />
      {/* Your content */}
    </div>
  );
}
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
