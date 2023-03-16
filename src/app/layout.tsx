import '../styles/globals.css'
import '../styles/normalize.css'

export const metadata = {
  title: '链上工具集',
  description: 'tools on chain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
