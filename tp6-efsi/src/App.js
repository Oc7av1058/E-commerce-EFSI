import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home";
import Contacto from "./components/contacto";
import detalleProducto from "./components/detalleProducto";
import Producto from "./components/productos";


function App() {

  return (
    
    
   <>
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/contacto" element={<Contacto/>}></Route>
            <Route path="/detalleProducto" element={<detalleProducto/>}></Route>
            <Route path="/producto" element={<Producto/>}></Route>
          </Route>
	        

       </Routes>
     </BrowserRouter>
   
 
     
    
      

    </>
    
  );
}

export default App;
