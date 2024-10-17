import Link from 'next/link'
import React from 'react'

const NavigationBar = () => {
  return (
    <div className='flex'>
        <header>
            <Link href='/' className="cursor-pointer text-3xl">
                KITSUNE
            </Link>

            <search/>
      </header>
    </div>
  )
}

export default NavigationBar