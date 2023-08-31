import React from "react";
import InfoProducto from "../components/infoProducto";
import DescripcionProducto from "../components/descripcionProducto";

export default function DetalleProducto(id){
 
return(
<>
<div class="container-fluid py-5">
        <InfoProducto/>

        <DescripcionProducto/>
    </div>
</>

)

}