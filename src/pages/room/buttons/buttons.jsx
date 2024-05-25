import React, { useState } from 'react';
import { useNavigate } from "react-router";
import './buttons.css';

function Buttons({}) {
    const navigate = useNavigate();
    const [clickMic, setClickMic] = useState(true);
    const [stream, setStream] = useState(null); // Состояние для хранения стрима

    

    const clickDisconnect = () => {
        navigate("/");
    };

    const handleClickStream = () => {
        // Проверяем, поддерживает ли браузер
        if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
            navigator.mediaDevices.getDisplayMedia({ video: true })
                .then((stream) => {
                    // логика здесь
                    
                    console.log('Экран выбран');
                })
        } 
    };

    const handleClickMic = () => {
        setClickMic(!clickMic);
    };

    return (
        <>
            <div className="block-menu">
                <div className="button-container">
                    <button className="button stream" onClick={handleClickStream}></button>
                    <button className={clickMic ? "button microphone on" : "button microphone off"} onClick={handleClickMic}></button>
                    <button className="button disconnect" onClick={clickDisconnect}></button>
                </div>
            </div>
        </>
    )
}

export default Buttons;
