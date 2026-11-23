# KirolGune

ETHAZI erronka (DAW, IES Zubiri Manteo), 1. taldea: Haritz Sanchez (koordinatzailea), Ibai Carrera, Ander Guerrero.
Kiroldegi baterako web aplikazioa: pistak eta jarduerak sarean erreserbatu, langileek eta zuzendaritzak okupazioa kudeatu.

## Stack
- Frontend: React + Vite + Bootstrap 5 + react-router-dom (repo honetan)
- Backend (geroago): Laravel API REST + MySQL, Docker barruan, AWSn hedatuta
- Kodea, testuak eta dokumentazioa euskaraz. Aldagai eta osagai izenak euskaraz (Goiburua, Hasiera...).

## Git (GitFlow)
- `main` eta `develop` ez dira zuzenean ukitzen.
- Adar bakoitza `develop`-etik: `feature-<zeregina>` (adib. `feature-goiburua-menua`).

## Diseinua
- Koloreak: berdea #0B7A5F, berde iluna #0F2B24, berde argia #E3F2EC, testua #1B1F24, grisa #5B6470, hondoa #FAFAFA.
- Aldagaiak `src/index.css`-en (`--kg-*`).

## Egitura
- `src/components/` osagai berrerabilgarriak
- `src/pages/` orriak (bideak `src/App.jsx`-en)

## Datu-eredua (aurreikusia)
roles, users (soft delete, email_verified_at), bazkide_profilak (1-1), instalazioak, ekipamenduak,
instalazio_ekipamendua (M-N), erreserbak, jarduerak, izen_emateak (M-N), begiraleak (M-N).

## Sprintak
1. Ideia, arkitektura, jarduera-diagramak, datu-eredua, maketa, React txantiloia (goiburua + nabigazioa). Entrega 2026-11-27.
2. Kontaktu-formularioa + bezero-baliozkotzea, footer sare sozialekin, responsive. Proxmox Ubuntu, 2. diskoaren partizioa.
3. Erregistroa + emaila, autentifikazioa, baimenak, zerbitzari-baliozkotzea, osagai parametrizatuak, dashboard, landing. Bash script-a, hodeiko hedapena.
4. CRUD (4 kontrolatzaile, soft delete), admin eta erabiltzaile panelak, API publikoa AJAX, Docker + AWS, NFS.
5. API propioa, geolokalizazioa, Local Storage, estatistikak, Duplicity babeskopiak.

Windows-en: PowerShell-ek npm blokeatzen badu, erabili `npm.cmd`.
