import React, {useRef} from 'react';
import './room.css';
import '../../index.css';
import { useRoomContext } from '../main/create-room/DataContext';

import OtherScreen from './screens/other-screen/other-screen';
import YourScreen from './screens/your-screen/your-screen';
import Buttons from './buttons/buttons';
import Chat from './chat/chat';

function Room() {
  const { dataRoom } = useRoomContext()

  return (
    <>
      <div className='main'>
        <div className='main-app'>
          <div className="container top">
            <YourScreen/>
            <OtherScreen/>
          </div>
          <div className="container bootom">
            <Buttons/>
            <Chat/>
            <h2 className="room-label">Room Id: {dataRoom.roomId}</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Room