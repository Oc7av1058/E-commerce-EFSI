import react from 'react';
import { Link } from "react-router-dom";
import Carousel from '../components/carousel';
import MostrarProducto from '../components/mostrarProductos';
import ProductoProvider from '../context/productosContext';
export default function Home() {

   
    return (
        <>
            
            
                <Carousel/>


            {/* aca abajo estan los productos*/}
            
                <MostrarProducto/>
            
        </>

    )

}