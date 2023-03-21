import '../globals.css'
import Link from 'next/link'


export default function RootLayout({ children }) {
  return (
    <div className='items-center justify-center justify-items-center w-full'>
        <nav className='m-auto self-center justify-self-center flex'>
            <ul class="inline-flex items-center -space-x-px self-center justify-self-center m-auto">
                <li>
                <Link href="/work" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</Link>
                </li>
                <li>
                <Link href="/work/two" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</Link>
                </li>
                <li>
                <Link href="/work/three" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</Link>
                </li>
                <li>
                <Link href="/work/four" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</Link>
                </li>
                <li>
                <Link href="/work/five" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</Link>
                </li>
            </ul>
        </nav>
          {children}
    </div>
  )
}
