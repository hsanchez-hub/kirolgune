import OrriHutsa from '@/components/OrriHutsa'
import AdminGoiburua from '@/components/AdminGoiburua'


export const metadata = { title: 'Admin · KirolGune' }


export default function Admin() {
  return <div className='d-flex'>
    <AdminGoiburua/> 
    <OrriHutsa izenburua="Admin" /><br/>
    </div>
}
