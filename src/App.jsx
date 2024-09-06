
import HomePage  from "./pages/homepage"

import Listing from "./pages/listing"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {

  return (
    <div>

      {/* <HomePage/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/listing" element={<Listing />} />
          
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
