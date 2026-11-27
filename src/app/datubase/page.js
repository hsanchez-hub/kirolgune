import OrriHutsa from '@/components/OrriHutsa'
import AdminGoiburua from '@/components/AdminGoiburua'

export const metadata = { title: 'DatuBase · KirolGune' }

export default function DatuBase() {
  return<div className='d-flex'>
      <AdminGoiburua/> 
      <OrriHutsa izenburua="DatuBase" /><br/>
      </div>
}
