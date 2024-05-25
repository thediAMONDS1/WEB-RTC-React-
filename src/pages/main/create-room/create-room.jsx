import { useNavigate } from "react-router-dom";
import '../main.css';
import { useEffect, useState } from 'react';
import { useRoomContext } from "./DataContext";
import './create-room.css'

function CreateRoom() {

    const { dataRoom, setDataRoom } = useRoomContext();
    const navigate = useNavigate();
    const [roomId, setRoomId] = useState("")
    const [nickname, setNickname] = useState("")
    const [disabledStatus, setDisabledStatus] = useState(false);
    const [checking, setChecking] = useState("");
    const [clickedStatus, setClickedStatus] = useState("")

    function Create() {
        setDataRoom({ nickname, roomId });
        navigate("room/" + roomId);
    }

    const handleClick = () => {
        const isValidInput = nickname.length !== 0 && roomId.length !== 0;
        if (!clickedStatus) {
            if (!isValidInput) {
                setChecking("Проверьте ввод");
                setClickedStatus(true);
            }
            else {
                Create();
            }
        }
        else {
            if (!isValidInput) {
                setChecking("Проверьте ввод");
            }
            else {
                Create();
            }
        }
    };

    useEffect(() => {
        if (clickedStatus) {
            if (nickname.length !== 0 && roomId.length !== 0) {
                setChecking("");
                setDisabledStatus(false);
            } else {
                NotValid();
                setDisabledStatus(true);
            }
        }
    }, [nickname, roomId])

    return (
        <>
            <div className="form-container">
                <div className="form-input room-id">
                    <label>ROOM ID</label>
                    <input value={roomId} onChange={e => setRoomId(e.target.value)} />
                </div>
                <div className="form-input nickname">
                    <label>NICKNAME</label>
                    <input value={nickname} onChange={e => setNickname(e.target.value)} />
                </div>
                <div className='check-form'>{checking}</div>
                <button onClick={handleClick} className="form-button" disabled={disabledStatus}>Создать</button>
            </div>
        </>
    )
}
export default CreateRoom