import React from 'react';
import { Grid } from '@/components/grid';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { TopNavigation } from '@/components/top-navigation';

const links = [
  {
    href: '/dropdown',
    label: 'Dropdown',
  },
  {
    href: '/global-search',
    label: 'Global Search',
  },
];

export default function Home() {
  return (
    <>
      <TopNavigation />
      <main className="relative flex h-screen items-center justify-center bg-background">
        <Grid />
        <div
          className={cn(
            'relative z-10 flex flex-col items-center justify-center gap-1 text-xl font-[family-name:var(--font-geist-mono)]'
          )}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-primary hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
