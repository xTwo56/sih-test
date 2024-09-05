
import { HomePage } from "./pages/homepage"

import Listing from "./pages/listing"

function App() {

  return (
    <div>
<<<<<<< HEAD
      <HomePage/>
      
=======
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/listing" element={<Listing />} />
          
        </Routes>
      </BrowserRouter>
>>>>>>> 1649f17f95d1dbf7bdf74a8ff84a622fa35bf174
    </div>
  )
}

export default App
