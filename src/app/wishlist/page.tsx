'use client'
import { motion } from 'framer-motion'
import { useRoomStore } from '@/store/roomstore'
import RoomCard from '@/components/common/roomCard'

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
          <p className="text-center w-full text-gray-500">No liked items yet.</p>
        )}
      </motion.div>
    </div>
  )
}
