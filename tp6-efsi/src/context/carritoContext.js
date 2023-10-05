import React,{createContext,useState, useEffect} from 'react';
import Producto from '../pages/productos';
import axios from 'axios';
export const CarritoContext = createContext();

const CarritoProvider = (props) => {
    const [productosCarrito, setProductosCarrito] = useState([]);
    const agregarProducto = async (producto) =>{
        setProductosCarrito([...productosCarrito,producto]);
    }

    const eliminarProducto =(id) =>{
        console.log("estoy en eliminarProducto y este es el id", id)
        let productoAux = productosCarrito;
        console.log(productoAux, "productosAux antes del filter");
        productoAux= productoAux.filter(id);
        console.log(productoAux, "productosAux despues del filter");
            //no anda tiene que usar la api, no filtrar

    }

    {/* 
    const getCategorias = async () =>{        
        await axios
        .get("https://dummyjson.com/products/categories")
        .then((result) => {
            
            setCategorias(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }    
    useEffect(() => {
        getCategorias();
   }, []); */}
    

    return (
        <CarritoContext.Provider
            value={{         
                productosCarrito,
                agregarProducto
            }
            }
        >
            {props.children}
        </CarritoContext.Provider>
    ) 
}

export default CarritoProvider;