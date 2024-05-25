import { createContext, useContext, useState } from "react";

const RoomContext = createContext(null);

export const RoomContextProvider = ({ children }) => {
    const [dataRoom, setDataRoom] = useState("");
    return (
        <RoomContext.Provider value={{ dataRoom, setDataRoom }}>
            {children}
        </RoomContext.Provider>
    )
}

export const useRoomContext = () => {
    const { dataRoom, setDataRoom } = useContext(RoomContext)
    return { dataRoom, setDataRoom }
}