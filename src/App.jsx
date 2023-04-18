import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import Productview from "./Pages/Productview"


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/productdetails/:id" element={<Productview/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
