import React,{createContext,useState, useEffect} from 'react';
import Producto from '../pages/productos';
import axios from 'axios';
export const CarritoContext = createContext();

const CarritoProvider = (props) => {
    const KEY_CARRITO= "carrito";
    let objeto= localStorage.getItem(KEY_CARRITO) ? JSON.parse(localStorage.getItem(KEY_CARRITO)) : [];        
    const [productosCarrito, setProductosCarrito] = useState(objeto);    
    const agregarProducto = async (producto) =>{
        setProductosCarrito([...productosCarrito,producto]);        
    }

    const eliminarProducto = async(id) =>{
        console.log("estoy en eliminarProducto y este es el id", id)
        let productoAux = productosCarrito;
        console.log(productoAux, "productosAux antes del filter");
        productoAux= productoAux.filter((producto)=> producto.id !== id);
        console.log(productoAux, "productosAux despues del filter");
        setProductosCarrito(productoAux);

        //no anda tiene que usar la api, no filtrar

    }

    useEffect(()=>{
        guardarObjeto(productosCarrito, KEY_CARRITO); //en teoría esto debería pisar lo que había con la key antes y guardar el nuevo con el producto eliminado
    },[productosCarrito])

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

   
   const guardarObjeto = (objeto, key) => {
    let jsonProductos = JSON.stringify(objeto);
    localStorage.setItem(key, jsonProductos);
}


    return (
        <CarritoContext.Provider
            value={{         
                productosCarrito,
                agregarProducto,
                eliminarProducto
            }
            }
        >
            {props.children}
        </CarritoContext.Provider>
    ) 
}

export default CarritoProvider;