import OrriHutsa from '@/components/OrriHutsa'
import AdminGoiburua from '@/components/AdminGoiburua'

export const metadata = { title: 'Harpidetz · KirolGune' }

export default function Harpidetz() {
  return <div className='d-flex'>
        <AdminGoiburua/> 
        <OrriHutsa izenburua="Harpidetz" /><br/>
        </div>
}
