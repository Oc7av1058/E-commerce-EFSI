import React, { useContext, useEffect } from 'react'
import InfoProducto from "../components/infoProducto";
import DescripcionProducto from "../components/descripcionProducto";
import { ProductoContext } from '../context/productosContext';
import { useParams } from 'react-router-dom';
export default function DetalleProducto() {
    const { id } = useParams();
    const { producto, getProductosById } = useContext(ProductoContext);
    useEffect(() => {
        console.log("el id que me esta llegando", id);
        getProductosById(id);
        //const {producto} =  useContext(ProductoContext);
        console.log("producto con id", producto);
    },[id]);

    return (
        <>

            <div class="container-fluid py-5">
                <InfoProducto producto={producto} />

                <DescripcionProducto />
            </div>
        </>

    )

}