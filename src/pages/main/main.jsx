import './main.css';
import { React } from 'react';
import CreateRoom from './create-room/create-room'

function Main() {

  return (
    <div className='auth'>
      <div className='auth-app'>
          <CreateRoom></CreateRoom>
      </div>
    </div>
  )
}

export default Main;