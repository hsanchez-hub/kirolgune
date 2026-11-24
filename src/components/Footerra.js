const sareSozialak = [
  { izena: 'Instagram', url: 'https://www.instagram.com/' },
  { izena: 'X', url: 'https://x.com/' },
  { izena: 'YouTube', url: 'https://www.youtube.com/' },
]

export default function Footer() {
  return (
    <footer className="goiburua oina py-4">
      <div className="container text-center">
        <p className="mb-2">Jarraitu gaitzazu sare sozialetan</p>
        <ul className="list-inline mb-3">
          {sareSozialak.map((sarea) => (
            <li key={sarea.izena} className="list-inline-item mx-2">
              <a
                href={sarea.url}
                className="nav-link d-inline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {sarea.izena}
              </a>
            </li>
          ))}
        </ul>
        <small>© 2026 KirolGune</small>
      </div>
    </footer>
  )
}