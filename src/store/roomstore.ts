// store/roomStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Room {
  id: number
  title: string
  host: string
  date: string
  price: string
  rating: number
  liked: boolean
  imgs: string[]
}


interface RoomStore {
  rooms: Room[]
  toggleLike: (id: number) => void
  setInitialRooms: (rooms: Room[]) => void
  getLikedRooms: () => Room[]
}

export const useRoomStore = create<RoomStore>()(
  persist(
    (set, get) => ({
      rooms: [],
      setInitialRooms: (rooms) => set({ rooms }),
      toggleLike: (id) => {
        set((state) => ({
          rooms: state.rooms.map((room) =>
            room.id === id ? { ...room, liked: !room.liked } : room
          ),
        }))
      },
      getLikedRooms: () => {
        return get().rooms.filter((room) => room.liked)
      },
    }),
    {
      name: 'room-storage', // Key in localStorage
    }
  )
)