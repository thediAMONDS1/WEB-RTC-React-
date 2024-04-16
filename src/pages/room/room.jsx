import React from 'react';
import './room.css';
import '../../index.css';
import { useRoomContext } from '../main/DataContext';



function Room() {
  const {dataRoom} = useRoomContext()

  return (
    <>
      <div className="room-container">
        <h2 className="room-label">Room Id: {dataRoom.roomId} + {dataRoom.nickname}</h2>
      </div>
      <div class="container">
        <div class="block"></div>
        <div class="block"></div>
      </div>
    </>
  )
}

export default Room