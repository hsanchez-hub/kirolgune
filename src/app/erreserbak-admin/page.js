import OrriHutsa from '@/components/OrriHutsa'
import AdminGoiburua from '@/components/AdminGoiburua'

export const metadata = { title: 'ErreserbakAdmin · KirolGune' }

export default function ErreserbakAdmin() {
  return <div className='d-flex'>
      <AdminGoiburua/> 
      <OrriHutsa izenburua="Erreserbak Admin" /><br/>
      </div>
}
