'use client';

import { usePathname } from 'next/navigation';
import '../globals.css'
import Link from 'next/link'



export default function RootLayout({ children }) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className='items-center justify-center justify-items-center w-full'>
        <nav className='m-auto self-center justify-self-center flex'>
            <ul class="inline-flex items-center -space-x-px self-center justify-self-center m-auto">
                <li>
                <Link href="/work" className={`px-3 py-2 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white active:bg-orange-400 ${
                  pathname === '/work'
                  ? "bg-teal-800"
                  : "dark:bg-gray-800"
                }`}>1</Link>
                </li>
                <li>
                <Link href="/work/two" className={`px-3 py-2 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white active:bg-orange-400 ${
                  pathname === '/work/two'
                  ? "bg-teal-800"
                  : "dark:bg-gray-800"
                }`}>2</Link>
                </li>
                <li>
                <Link href="/work/three" className={`px-3 py-2 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white active:bg-orange-400 ${
                  pathname === '/work/three'
                  ? "bg-teal-800"
                  : "dark:bg-gray-800"
                }`}>3</Link>
                </li>
                <li>
                <Link href="/work/four" className={`px-3 py-2 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white active:bg-orange-400 ${
                  pathname === '/work/four'
                  ? "bg-teal-800"
                  : "dark:bg-gray-800"
                }`}>4</Link>
                </li>
                <li>
                <Link href="/work/five" className={`px-3 py-2 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white active:bg-orange-400 ${
                  pathname === '/work/five'
                  ? "bg-teal-800"
                  : "dark:bg-gray-800"
                }`}>5</Link>
                </li>
            </ul>
        </nav>
          {children}
    </div>
  )
}
