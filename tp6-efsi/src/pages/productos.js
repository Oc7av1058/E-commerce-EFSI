import React from "react";
import Titulo from "../components/titulo";
import FiltrarProducto from "../components/filtrarProducto";
import ProductoProvider from "../context/productosContext";
import CategoriaProvider from "../context/categoriasContext";
export default function Producto(){

return(
<>
    <Titulo/>
    {/* Page Header End */}
    
        <CategoriaProvider>
            <FiltrarProducto/>
        </CategoriaProvider>
    
    {/* Shop Start */}
    
</>

)

}
