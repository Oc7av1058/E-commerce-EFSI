import React from "react";
import Titulo from "../components/titulo";
import FiltrarProducto from "../components/filtrarProducto";
import ProductoProvider from "../context/productosContext";
export default function Producto(){

return(
<>
    <Titulo/>
    {/* Page Header End */}
    <ProductoProvider>
        <FiltrarProducto/>
    </ProductoProvider>
    {/* Shop Start */}
    
</>

)

}
