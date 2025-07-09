import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "../ui/card"
import { House,AlarmSmoke,SwatchBook,HandPlatter,TentTree,Umbrella,Coffee,Snowflake,TreePalm,Tent,WavesLadder,Building2, SlidersHorizontal,} from "lucide-react"
import { Button } from "../ui/button"


const arrIcons = [
  {
  title: "shared Home",
  icon: House,
},
  {
  title: "OMG!",
  icon: AlarmSmoke ,
},
  {
  title: "Design",
  icon: SwatchBook,
},
  {
  title: "Luxe",
  icon: HandPlatter,
},
{
  title: "Countryside",
  icon: TentTree,
},
{
  title: "Beach",
  icon: Umbrella,
},
{
  title: "Bed & Breakfast",
  icon: Coffee,
},
{
  title: "Arctic",
  icon: Snowflake,
},
{
  title: "Islands",
  icon: Tent,
},
{
  title: "Amazing pools",
  icon: WavesLadder,
},
{
  title: "Iconic Cities",
  icon: Building2,
},
{
  title: "Tropical",
  icon: TreePalm,
},

]
export function CarouselIcons() {
  return (
    <Carousel className="w-full  max-w-[100vw] ">
      <CarouselContent className="-ml-1   border-none shadow-none">
        {arrIcons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/7 border-none shadow-none">
              <div className="p-1">
                <Card className=" border-none shadow-none">
                  <CardContent className="flex flex-col  items-center justify-center p-6 border-none shadow-none">
                    <div >
                      <IconComponent />
                    </div>
                    <div className="text-xs font-semibold ">{item.title}</div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext className="right-28"/>
       <Button variant='outline' className='absolute right-1 top-1/2 -translate-y-1/2 z-50 border'>
                <SlidersHorizontal className='mr-2' size={10} />
                Filter
              </Button>
    </Carousel>
  )
}
