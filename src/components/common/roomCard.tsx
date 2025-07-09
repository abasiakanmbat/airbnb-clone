'use client'
import { Card, } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Dotbuttons,
} from "@/components/ui/carousel"
import { Star } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Button } from "../ui/button"

const roomImg = []

export default function RoomCard() {
  const [liked, setLiked] = useState(false)
  return (
    <div>
      <Card className="w-full max-w-[260px] pt-0 border-none shadow-none">

        <Carousel className="w-full max-w-[260px] border-none">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card style={{backgroundImage:`url(/house-one/a-one.avif)`}}
                  onClick={() => setLiked(!liked)}
                  className="relative bg-cover aspect-square border-amber-300 flex   items-center justify-center">

                   
                      <Image
                        src={liked ? "/red-heart.svg" : "/heart.svg"}
                        alt="heart"
                        width={20}
                        height={20}
                        className="inline-block w-4 h-4 absolute top-4 right-4"/>
                    

                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="" />
          <CarouselNext />
          <Dotbuttons className="absolute bottom-4 left-1/2 -translate-x-1/2" />
        </Carousel>

        <div className=" text-sm px-1">
          <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold">5 bedroom Duplex, Ajah</h3>
          <p className="text-sm  flex items-center"><Star className="w-4 text-black"/>5.0</p>
          </div>
          <p className="text-sm text-gray-500">Hosted by GNEF</p>
          <p className="text-sm text-gray-500">oct 4 - 7</p>
          <p className="text-sm flex items-center">
            <Image
              src="/naira.svg"
              alt="price"
              width={20}
              height={20}
              className="inline-block mr-1 w-4"/>
              <span>20,000</span>
          </p>
        </div>
      </Card>
    </div>
  )
}

