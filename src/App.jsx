
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/home.jsx"
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Services from "./pages/service.jsx";
import Product from "./pages/product.jsx";
import Nav1 from "./components/navbar.jsx";
const App = ()=>{
  return(
    <>
        <BrowserRouter>
            <Nav1></Nav1>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="/services" element={<Services></Services>}></Route>
              <Route path="/product" element={<Product></Product>}></Route>
              <Route path="/contact" element={<Contact></Contact>}></Route>
            </Routes>
            
        </BrowserRouter>
    </>
  )
}

export  default App;