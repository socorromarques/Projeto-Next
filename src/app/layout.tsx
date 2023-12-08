import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Projeto Next',
  description: 'Projeto Next utilizado no curso de Next 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <body className={inter.className}>
     <NavBar />
      <main className='bg-slate-700 h-screen p-16'>{children}</main>
     </body>
    </html>
  )
}
