import React,{createContext,useState} from 'react'


const  BookContext = createContext()
export function RoomProvider({children}){
      const [bookings, setBookings] = useState([])

      const addBook = (obj) =>{
        setBookings((prevState)=>  [...prevState, obj])
      }

    return(
        <BookContext.Provider value={{bookings, addBook, setBookings}}>
            {children}

        </BookContext.Provider>
    )
}
export default  BookContext
export const RoomConsumer = BookContext.Consumer


