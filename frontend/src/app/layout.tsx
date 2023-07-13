import {Navbar} from './sections'
import AuthProvider from './context/AuthProvider'
import "./globals.scss"
export const metadata = {
  title: "Student Labs",
  description:
    '"Student Labs" is an online platform designed with the sole purpose of assisting students in their academic pursuits. With its user-friendly interface',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="prose">
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}