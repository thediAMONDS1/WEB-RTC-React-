import React, { useState, useEffect } from 'react';
import './chat.css';
import { useRoomContext } from '../../main/create-room/DataContext';

function Chat() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [serverAnswer, setServerAnswer] = useState(false)
    const { dataRoom } = useRoomContext()

    const newMessage = {
        className: 'message',
        nickname: dataRoom.nickname,
        text: inputValue
    };

    const serverMessage = {
        className: 'server',
        nickname: 'Сервер',
        text: dataRoom.nickname + ' подключился к серверу'
    };

    ///////////////////////////////////////////////////////////////////////////
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    const sendMessage = () => {
        if (inputValue.trim() !== '') {
            if (serverAnswer == false) {
                setMessages([newMessage, serverMessage, ...messages]);
                setServerAnswer(true)
                setInputValue('');
            }
            else {
                setMessages([newMessage, ...messages]);
                setInputValue('');
            }
        }
    };
    ///////////////////////////////////////////////////////////////////////////

    return (
        <div className="block-chat">
            <div id="chat-window" className="chat-window">
                {messages.map((message, index) => (
                    <div className={`message ${message.className}`}>
                        {message.nickname}: {message.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                className="chat-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Напишите сообщение..."
            />
        </div>
    );
}

export default Chat;
