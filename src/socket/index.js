import {io} from 'socket.io-client'

const options = {
    "force new connection": true,
    reconnectionAttempts: "Infinity",
    timeout: 1000,
    transports: ["websocket"]
}

const socket=io('hhtp://localhost:3001', options);

export default socket;