import { Button } from '@/components/ui/button'
import Link from 'next/link'

const page = () => {
  return (
    <div className='home h-screen'>
      <h1 className='text-center md:text-6xl font-semibold text-2xl text-white  '>
        This is Dashboard
      </h1>
      <div className='flex justify-center items-center mt-5'>
        <Button variant='outline' className='text-white cursor-pointer'>
          <Link href='/'> Back to home page</Link>
        </Button>
      </div>
    </div>
  )
}

export default page
