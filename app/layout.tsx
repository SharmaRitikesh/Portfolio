import './globals.css'
import { Poppins } from 'next/font/google'
import { Metadata } from 'next'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ritikesh Sharma - Full Stack Developer',
  description: 'Portfolio of Ritikesh Sharma, a Full Stack Developer specializing in React, Node.js, and Python.',
  keywords: 'Full Stack Developer, React, Node.js, Python, Web Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}

