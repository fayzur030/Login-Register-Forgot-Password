import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'

export default function HomePage() {
  return (
    <div className='relative min-h-screen overflow-hidden'>
      <div
        className='absolute inset-0 scale-110'
        style={{
          backgroundImage: "url('/image6.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px)',
        }}
      />

      {/* <div className='absolute inset-0 bg-black/30' /> */}

      <div className='relative z-10 flex flex-col items-center justify-end md:justify-center min-h-screen px-4 pb-6 gap-4'>
        <div className='flex w-full gap-3 md:mt-8 justify-center md:w-auto'>
          <Button
            asChild
            variant='outline'
            className='flex-1 md:flex-none text-[14px] md:text-base text-white md:text-gray-800 font-medium rounded-full py-4'
          >
            <Link href='/register'>Register</Link>
          </Button>

          <Button
            asChild
            className='flex-1 md:flex-none rounded-full bg-[#2B8761] text-white py-4'
          >
            <Link href='/login'>Login</Link>
          </Button>
        </div>

        <Button
          variant='outline'
          className='w-full md:w-auto text-[14px]  text-white md:text-base font-medium rounded-full flex items-center justify-center gap-2 py-4 cursor-pointer'
        >
          <FcGoogle className='w-6 h-6 md:w-7 md:h-7' />
          <span>Login with Google</span>
        </Button>
      </div>
    </div>
  )
}
