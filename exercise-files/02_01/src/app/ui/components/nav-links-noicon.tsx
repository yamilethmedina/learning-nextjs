'use client';


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/' },
  {
    name: 'Posts',
    href: '/blog/posts'
  },
  { name: 'About', href: '/blog/about' },
  { name: 'Contact', href: '/blog/contact' },
];

export default async function NavLinksNoIcon() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className="'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-purple-100 md:flex-none md:justify-start md:p-2 md:px-3'"
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}

    </>
  );
}
