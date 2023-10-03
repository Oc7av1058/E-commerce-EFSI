import React,{createContext,useState, useEffect} from 'react';
import Producto from '../pages/productos';
import axios from 'axios';
export const CarritoContext = createContext();

const CarritoProvider = (props) => {
    const [productosCarrito, setProductosCarrito] = useState([]);
    const agregarProducto = async (producto) =>{
        setProductosCarrito(productosCarrito + producto);
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