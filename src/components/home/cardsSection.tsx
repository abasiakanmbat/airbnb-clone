import React from 'react'
import RoomCard from '../common/roomCard'

export default function CardsSection() {
  return (
    <div className='container '>
      <div className=' w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto my-10'>

      {Array.from({ length: 24 }).map((_, index) => (
        <RoomCard key={index}/>
      ))}
      </div>
    </div>
  )
}
