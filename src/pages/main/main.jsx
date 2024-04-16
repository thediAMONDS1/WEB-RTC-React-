import { useNavigate } from "react-router-dom";
import './main.css';
import { useEffect, useState } from 'react';
import { useRoomContext } from "./DataContext";

function Main() {
  const {dataRoom, setDataRoom} = useRoomContext();

  // Навигация по страницам 
  const navigate = useNavigate();

  // Тут начинает копировать данные
  const [roomId, setRoomId] = useState("")
  const [nickname, setNickname] = useState("")
  const [disabled, setDisabled] = useState(false);
  const [checking, setChecking] = useState("");

  //Переход на другую страницу + указание пути
  const handleClick = () => {
    
    setDataRoom({nickname, roomId})
    navigate("room/" + roomId)
  }

  // Проверка ввода
  useEffect(() => {
    if (nickname.length !== 0 && roomId.length !== 0) {
      setChecking("");
      setDisabled(false);
    } else {
      setChecking("Проверьте ввод");
      setDisabled(true)
    }

  }, [nickname, roomId])


  return (
    <div className="form-container">
    <div>
        {roomId}
        <div className="form-input">
          <label>ROOM ID</label>
          <input id="room-id" value={roomId} onChange={e => setRoomId(e.target.value)} />
        </div>
        <div className="form-input">
          <label>NICKNAME</label>
          <input value={nickname} onChange={e => setNickname(e.target.value)} />
          <div className='check-form'>{checking}</div>
        </div>
        <button onClick={handleClick} className="form-button" disabled={disabled}>Создать</button>
        </div>
    </div>
  )
}

export default Main

