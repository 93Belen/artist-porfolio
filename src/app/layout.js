import Cart from './cart'
import './globals.css'
import Header from './header'
import Modal from './modal'
import Providers from './providers/providers'
import CartModal from './cartModal';
import { Quicksand } from 'next/font/google';

const font = Quicksand({
  variable: '--font',
  display: 'swap',
  weight: ['300', '400'],
  preload: false,
})


export const metadata = {
  title: 'John Reynolds',
  description: '',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={`${font.variable}`}>
      <head>

      </head>
      <body className='w-screen min-h-screen h-fit bg-slate-900 text-gray-100 box-border overflow-x-hidden font-sans'>
      <Providers>
      <Header />
      <Cart />
      <CartModal />
      <main className="min-h-3/5 w-screen">
          <Modal />
          {children} 
      </main>
      </Providers>
      <script src="https://js.stripe.com/v3/"></script>
      </body>
    </html>
  )
}
