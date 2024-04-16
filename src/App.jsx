import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './pages/main/main'
import Room from './pages/room/room'
import NotFound404 from './pages/notfound404/notfound404'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/room/:roomId" element={<Room />} />
          <Route path='*' element={<NotFound404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;