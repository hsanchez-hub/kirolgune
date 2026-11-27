'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const estekak = [
  { bidea: '/', testua: 'Hasiera' },
  { bidea: '/instalazioak', testua: 'Instalazioak' },
  { bidea: '/jarduerak', testua: 'Jarduerak' },
  { bidea: '/erreserbak', testua: 'Erreserbak' },
  { bidea: '/kontaktua', testua: 'Kontaktua' },
]

export default function Goiburua() {
  const unekoa = usePathname()
  const [logeatuta, setlogeatuta] = useState(false);

  return (
    <header className="goiburua sticky-top">
      <nav className="navbar navbar-expand-lg py-2">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center gap-2" href="/">
            <Image src="/kirolgune-logoa.png" alt="" width={28} height={38} priority />
            KirolGune
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu-nagusia"
            aria-controls="menu-nagusia"
            aria-expanded="false"
            aria-label="Menua ireki"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu-nagusia">
            <ul className="navbar-nav mx-auto mb-3 mb-lg-0 gap-lg-2">
              {estekak.map(({ bidea, testua }) => (
                <li className="nav-item" key={bidea}>
                  <Link
                    className={`nav-link px-lg-2 ${unekoa === bidea ? 'active' : ''}`}
                    href={bidea}
                  >
                    {testua}
                  </Link>
                </li>
              ))}
            </ul>

            {logeatuta == false ? (<div className="d-flex gap-2">
              <Link className="btn btn-outline-primary" href="/saioa-hasi" onClick={() => setlogeatuta(true)}>
                Saioa hasi
              </Link>
              <Link className="btn btn-primary" href="/erregistratu">
                Erregistratu
              </Link>
            </div>) : ( <div className="d-flex gap-2">
             <Link className="btn btn-outline-primary" href="/" onClick={() => setlogeatuta(false)}>
                Saioa itxi
              </Link>   <Link className="btn btn-primary" href="/admin">
                Admin 
              </Link> </div>)}
          </div>
        </div>
      </nav>
    </header>
  )
}
