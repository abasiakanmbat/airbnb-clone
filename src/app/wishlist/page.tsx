'use client'
import { motion } from 'framer-motion'
import { useRoomStore } from '@/store/roomstore'
import RoomCard from '@/components/common/roomCard'
import Link from 'next/link'
import Image from 'next/image'

export default function WishlistPage() {
  const rooms = useRoomStore((state) => state.rooms)
  const toggleLike = useRoomStore((state) => state.toggleLike)
  const likedRooms = rooms.filter((room) => room.liked)

  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-bold text-center my-4">Your Wishlist</h2>
      <motion.div
        className="w-fit max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto my-10"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
      >
        {likedRooms.length > 0 ? (
          likedRooms.map((room) => (
            <RoomCard key={room.id} {...room} toggleLike={toggleLike} />
          ))
        ) : (
          <p className=" w-full text-gray-500">No liked items yet. 
          <Link href="/" className="text-blue-500 hover:underline translate-y-1/2 pl-4">
            Go back to home
          </Link>
          </p>
        )}
     


     
      </motion.div>

      <Link
      href="/"
      className="fixed z-50 bottom-10 right-10 flex items-center gap-2 bg-white shadow-lg border hover:shadow-xl transition-all duration-300 ease-in-out rounded-full px-5 py-2.5 hover:scale-105 hover:bg-red-50 group"
    >
      <span className="text-sm font-semibold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
        Back to Home
      </span>
      <Image
        src="/red-heart.svg"
        alt="Wishlist"
        width={20}
        height={20}
        className="group-hover:scale-115 transition-transform duration-300"
      />
    </Link>
    </div>
  )
}
