import './your-screen.css'
import { useRoomContext } from '../../../main/create-room/DataContext';

function YourScreen() {
    const { dataRoom } = useRoomContext()
    

    return (
        <div className="your-screen">
            {/* <video id="localVideo" class="local__video" autoplay ></video> */}
            <h2 className="your-nickname">{dataRoom.nickname}</h2>
        </div>
    )
}
export default YourScreen