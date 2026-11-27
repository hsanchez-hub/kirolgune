import OrriHutsa from '@/components/OrriHutsa'
import AdminGoiburua from '@/components/AdminGoiburua'

export const metadata = { title: 'Salmentak · KirolGune' }

export default function Salmentak() {
  return <div className='d-flex'>
      <AdminGoiburua/> 
      <OrriHutsa izenburua="Salmentak" /><br/>
      </div>
}
