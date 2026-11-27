'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const estekak = [
  { bidea: '/admin', testua: 'admin' },
  { bidea: '/salmentak', testua: 'salmentak' },
  { bidea: '/datubase', testua: 'datubase' },
  { bidea: '/harpidetzak', testua: 'harpidetzak' },
  { bidea: '/erreserbakadmin', testua: 'Erreserbak-admin' },
]

export default function Goiburua() {
  const unekoa = usePathname()

  return (
    
    <aside className="alboa d-flex flex-column p-3  sticky-top" style={{ width: 220 }}>
      <ul className="nav nav-pills flex-column gap-1 mb-auto">
        {estekak.map(({ bidea, testua }) => (
          <li className="nav-item" key={bidea}>
            <Link
              className={`nav-link ${unekoa === bidea ? 'active' : ''}`}
              href={bidea}
            >
              {testua}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
