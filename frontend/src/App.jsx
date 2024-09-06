
import HomePage from "./pages/homepage"

import Listing from "./pages/listing"
import Signup from "./pages/signup"
import Login from "./pages/login"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Completed from "./pages/Completed"
import { FarmerDetails } from "./pages/farmerDetails"

function App() {

  return (
    <div>

    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/listing" element={<Listing />} />
<<<<<<< HEAD
          <Route path="/completed" element={<Completed/>} />
          <Route path="/farmer-details" element={<FarmerDetails/>} />
        
=======
          <Route path="/completed" element={<Completed />} />
>>>>>>> c6edc2235f91b46a7467ea532b525485f4870ac5
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
