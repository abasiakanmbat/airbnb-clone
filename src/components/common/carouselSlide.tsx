'use client'
import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "../ui/card"
import { SlidersHorizontal,} from "lucide-react"
import { Button } from "../ui/button"
import clsx from "clsx"
import { arrIcons } from "../data/filterIcons"


export function CarouselIcons() {
    const [selected, setSelected] = React.useState<string | null>(null)

  const handleClick = (title: string) => {
    setSelected(title)
  }
  return (
    <Carousel className="w-full max-w-[100vw]">
      <CarouselContent className="-ml-1 border mr-10 border-none shadow-none">
        {arrIcons.map((item, index) => {
          const IconComponent = item.icon
          const isActive = selected === item.title

          return (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/7 border-none shadow-none"
            >
              <div className="p-1">
                <Card
                  className={clsx(
                    "border-none shadow-none cursor-pointer transition-all duration-200",
                    isActive && "opacity-100"
                  )}
                  onClick={() => handleClick(item.title)}
                >
                  <CardContent
                    className={clsx(
                      "flex flex-col items-center justify-center p-6 border-none shadow-none",
                      isActive ? "opacity-100" : "opacity-60"
                    )}
                  >
                    <div className="mb-1">
                      <IconComponent className={clsx(isActive ? "text-black" : "text-gray-500")} />
                    </div>
                    <div
                      className={clsx(
                        "text-xs font-semibold transition-all duration-200",
                        isActive
                          ? "underline underline-offset-4 text-black"
                          : "text-gray-500"
                      )}
                    >
                      {item.title}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext className="right-28" />

      <Button
        variant="outline"
        className="absolute right-1 top-1/2 -translate-y-1/2 z-50 border"
      >
        <SlidersHorizontal size={10} />
        Filter
      </Button>
    </Carousel>
  )
}
