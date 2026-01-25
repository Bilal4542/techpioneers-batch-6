import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import PostBook from "./components/PostBook"


function App() {
 

  return (
  <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/postbook" element={<PostBook/>}/>
    </Routes>
    
  </>
  )
}

export default App
