import "./App.css";
import {Route,Routes} from 'react-router-dom'
import Home from "./components/Home";
import Post from "./components/Post";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:id" element={<Post/>}/>
    </Routes>
    </>
  );
}

export default App;
