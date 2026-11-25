import Link from 'next/link'

const Ikonoa = ({ d }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
)

const zerbitzuak = [
  {
    ikonoa: 'M3 5h18v16H3zM3 10h18M8 3v4M16 3v4',
    izenburua: 'Pistak erreserbatu',
    testua: 'Ikusi zein ordu dauden libre eta erreserbatu pista bat minutu batean, telefonoz deitu gabe.',
  },
  {
    ikonoa: 'M9 7a3 3 0 1 0 0-.01M3 21v-1a6 6 0 0 1 12 0v1M17 11a3 3 0 1 0 0-.01M21 21v-1a4 4 0 0 0-4-4',
    izenburua: 'Jardueretan izena eman',
    testua: 'Yoga, igeriketa, spinning... Aukeratu jarduera eta ziurtatu zure plaza zuzenean.',
  },
  {
    ikonoa: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
    izenburua: 'Kiroldegia kudeatu',
    testua: 'Langileek eta zuzendaritzak okupazioa eta erreserbak leku bakarrean ikusten dituzte.',
  },
]

export default function Hasiera() {
  return (
    <>
      <section className="azala py-5">
        <div className="container py-lg-5">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="display-5 fw-bold mb-3">
                Zure kiroldegia, sakelako telefonoan
              </h1>
              <p className="lead mb-4">
                KirolGunerekin pistak eta jarduerak sarean erreserbatzen dituzu, egunean 24
                orduz, mugikorretik edo ordenagailutik.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <Link className="btn btn-light btn-lg" href="/erreserbak">
                  Erreserbatu orain
                </Link>
                <Link className="btn btn-outline-light btn-lg" href="/jarduerak">
                  Jarduerak ikusi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="h3 fw-bold mb-4">Zer eskaintzen du KirolGunek?</h2>
          <div className="row g-4">
            {zerbitzuak.map(({ ikonoa, izenburua, testua }) => (
              <div className="col-md-4" key={izenburua}>
                <div className="card zerbitzua h-100 p-3">
                  <div className="card-body">
                    <div className="ikonoa mb-3" aria-hidden="true"><Ikonoa d={ikonoa} /></div>
                    <h3 className="h5 fw-bold">{izenburua}</h3>
                    <p className="text-secondary mb-0">{testua}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

