
import Link from 'next/link'


export const metadata = { title: 'Saioa hasi · KirolGune' }

export default function SaioaHasi() {
  return <div className="d-flex gap-2 d-flex justify-content-center">
              <Link className="btn btn-outline-primary" href="/arrunta">
                Arrunta
              </Link>
              <Link className="btn btn-outline-primary" href="/admin">
                Admin 
              </Link>
            </div>
}
