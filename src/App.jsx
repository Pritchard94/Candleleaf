import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import Productview from "./Pages/Productview"
import Discovery from "./Pages/Discovery"
import Details from "./Pages/Details"
import Shipping from "./Pages/Shipping"
import Cart from "./Pages/Cart"
import Payment from "./Pages/Payment"
import Thankyou from "./Pages/Thankyou"


function App() {


  return (
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Discovery" element={<Discovery/>}/>
                <Route path="/productdetails/:id" element={<Productview/>}/>
                <Route path="/details" element={<Details/>}/>
                <Route path="/shipping" element={<Shipping/>}/>
                <Route path="/payment" element={<Payment/>}/>
                <Route path="/thankyou" element={<Thankyou/>}/>
                <Route path="/cart" element={<Cart/>}/>
              </Routes>
          </BrowserRouter>
    
    
  )
}

export default App
