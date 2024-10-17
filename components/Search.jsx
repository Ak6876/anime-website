import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from './ui/button'
import Image from 'next/image'

const Search = () => {
  return (
    <div className="flex min-w-full gap-2">
        <Input 
        type="text" 
        placeholder="search anime..." 
        className="shad-input"
        size={20}
        />
        <div className='flex items-center justify-center gap-2'>
        <Button variant="ghost" size="icon" className="w-8">
            <Image
              src="/assets/icons/search-logo.svg"
              alt="search"
              height={25}
              width={25}
            />
        </Button>
        
        <Button className="bg-zinc-800 rounded-xl">
            Filter
        </Button>
        </div>
    </div>
  )
}

export default Search