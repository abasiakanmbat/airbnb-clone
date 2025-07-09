import { CircleUser, Globe, Hamburger, HamburgerIcon, Menu, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='container mx-auto flex justify-between items-center px-4 py-2 bg-white shadow-md'>
      <Link href="/">
      <Image
        src="/airbnb-title.svg"
        alt="Airbnb"
        width={108}
        height={99}
      />
      </Link>
      <section className='hidden  md:flex shadow inset-shadow-2xs bg-white rounded-full px-4 py-2 gap-2 items-center w-fit'>
        <div>Any where</div>
        <div className='h-[20px] bg-gray-300 w-[1px]'></div>
        <div>Any week</div>
        <div className='h-[20px] bg-gray-300 w-[1px]'></div>
        <div>Add guest</div>
        <div className='bg-[#ff5a5f] rounded-full p-1.5'>
          <Search className='text-white' size={15}/>
        </div>
      </section>
      <section className='hidden md:flex items-center gap-4'>
        <h2>become a host</h2>
        <Globe className='' size={20} />
        <div className='flex items-center gap-2 border border-gray-300 rounded-full  p-1'>
          <Menu className='' size={15} />
          <div><CircleUser className='text-gray-500' size={20} /></div>
        </div>
      </section>
    </div>
  )
}

