import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import Goiburua from '@/components/Goiburua'
import BootstrapJS from '@/components/BootstrapJS'

export const metadata = {
  title: 'KirolGune',
  description: 'KirolGune: kiroldegiko pistak eta jarduerak sarean erreserbatu.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="eu">
      <body>
        <Goiburua />
        <main>{children}</main>
        <BootstrapJS />
      </body>
    </html>
  )
}
