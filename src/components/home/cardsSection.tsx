'use client'
import React, { useEffect, } from 'react'
import RoomCard from '../common/roomCard'
import {  roomDetails, } from '../data/house';
import { useRoomStore } from '@/store/roomstore';
import Image from 'next/image';
import Link from 'next/link';

export default function CardsSection() {
  const { rooms, toggleLike, setInitialRooms } = useRoomStore()

    useEffect(() => {
    if (rooms.length === 0) {
      setInitialRooms(roomDetails)
    }
  }, [])


  return (
    <div className='container mx-auto'>
     <Link
      href="/wishlist"
      className="fixed z-50 bottom-10 right-10 flex items-center gap-2 bg-white shadow-lg border hover:shadow-xl transition-all duration-300 ease-in-out rounded-full px-5 py-2.5 hover:scale-105 hover:bg-red-50 group"
    >
      <span className="text-sm font-semibold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
        View Wishlist
      </span>
      <Image
        src="/red-heart.svg"
        alt="Wishlist"
        width={20}
        height={20}
        className="group-hover:scale-115 transition-transform duration-300"
      />
    </Link>
      <div className=' w-fit max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto my-10'>

     {rooms.map((room) => (
          <RoomCard key={room.id} {...room} toggleLike={toggleLike} />
        ))}
      </div>
    </div>
  )
}
