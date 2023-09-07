import React, { useContext } from 'react'
import InfoProducto from "../components/infoProducto";
import DescripcionProducto from "../components/descripcionProducto";
import { ProductoContext } from '../context/productosContext';
export default function DetalleProducto(id){
const {producto, getProductosById} =  useContext(ProductoContext);
getProductosById(id);
//const {producto} =  useContext(ProductoContext);
console.log("producto con id", producto);
return(
<>

<div class="container-fluid py-5">
        <InfoProducto producto={producto}/>

        <DescripcionProducto/>
    </div>
</>

)

}