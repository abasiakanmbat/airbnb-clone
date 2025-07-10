'use client'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Dotbuttons,
} from '@/components/ui/carousel'
import { Star } from 'lucide-react'
import Image from 'next/image'

interface RoomCardProps {
  id: number
  title: string
  host: string
  date: string
  price: string
  rating: number
  liked: boolean
  toggleLike: (id: number) => void
  imgs: string[]
}

export default function RoomCard({
  id,
  imgs,
  title,
  host,
  date,
  price,
  rating,
  liked,
  toggleLike,
}: RoomCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: id * 0.05 }}  
    >
      <Card className="w-full max-w-[260px] pt-0 border-none shadow-none transition-transform duration-600 hover:scale-[1.03]">
        <Carousel className="w-full max-w-[260px] border-none">
          <CarouselContent>
            {imgs.map((img, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card
                    style={{ backgroundImage: `url(${img})` }}
                    onClick={() => toggleLike(id)}
                    className="relative bg-cover aspect-square flex items-center justify-center"
                  >
                    <motion.div
                      onClick={() => toggleLike(id)}
                      initial={false}
                      animate={{ scale: liked ? 1.3 : 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      className="absolute top-4 right-4 cursor-pointer"
                    >
                      <Image
                        src={liked ? '/red-heart.svg' : '/heart.svg'}
                        alt="heart"
                        width={20}
                        height={20}
                        className="inline-block w-4 h-4"
                      />
                    </motion.div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
          <Dotbuttons className="absolute bottom-4 left-1/2 -translate-x-1/2" />
        </Carousel>

        <div className="text-sm px-1">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">{title}</h3>
            <p className="text-sm flex items-center">
              <Star className="w-4 text-black" />
              {rating}
            </p>
          </div>
          <p className="text-sm text-gray-500">Hosted by {host}</p>
          <p className="text-sm text-gray-500">{date}</p>
          <p className="text-sm flex items-center">
            <Image
              src="/naira.svg"
              alt="price"
              width={20}
              height={20}
              className="inline-block mr-1 w-4"
            />
            <span>{price}</span>
          </p>
        </div>
      </Card>
    </motion.div>
  )
}
