import Link from 'next/link'
import React from 'react'
import Search from './Search'
import { Button } from './ui/button'

const NavigationBar = () => {
  return (

    <header className='flex justify-between gap-4 min-w-full'>
       <div className='flex gap-4'>
            <Link href='/' className="cursor-pointer text-3xl text-center">
                KITSUNE
            </Link>
            <Search/>
       </div>
        <div className='flex justify-end'>
            <Button className="bg-zinc-800 rounded-xl">
                Login
            </Button>
        </div>
    </header>

  )
}

export default NavigationBar