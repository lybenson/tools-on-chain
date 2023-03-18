import '../styles/globals.css'
import '../styles/normalize.css'
import styles from './layout.module.css'

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
      <body>
        <div>root layout</div>
        <div className={styles.container}>
          {children}
        </div>
      </body>
    </html>
  )
}
