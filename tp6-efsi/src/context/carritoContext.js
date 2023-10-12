import React,{createContext,useState, useEffect} from 'react';
import Producto from '../pages/productos';
import axios from 'axios';
export const CarritoContext = createContext();

const CarritoProvider = (props) => {
    const KEY_CARRITO= "carrito";
    const [productosCarrito, setProductosCarrito] = useState([]);

    useEffect(() => {
        let objeto= traerObjeto(KEY_CARRITO);
        console.log(objeto+"objeto");
        console.log(KEY_CARRITO+"key");
        if(objeto!=null){
        setProductosCarrito(objeto);
        }
        
    }, []); 

    const agregarProducto = async (producto) =>{
        setProductosCarrito([...productosCarrito,producto]);
        guardarObjeto(productosCarrito, KEY_CARRITO);
    }

    const eliminarProducto = async(id) =>{
        console.log("estoy en eliminarProducto y este es el id", id)
        let productoAux = productosCarrito;
        console.log(productoAux, "productosAux antes del filter");
        productoAux= productoAux.filter((producto)=> producto.id !== id);
        console.log(productoAux, "productosAux despues del filter");
        setProductosCarrito(productoAux);
        guardarObjeto(productosCarrito, KEY_CARRITO); //en teoría esto debería pisar lo que había con la key antes y guardar el nuevo con el producto eliminado

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

   
   const guardarObjeto = async (objeto, key) => {
    let jsonProductos = await JSON.stringify(objeto);
    await localStorage.setItem(key, jsonProductos);
}
const traerObjeto = async (key) =>{

    let objeto = await localStorage.getItem(key);
    objeto=await JSON.parse(objeto);
    
    return objeto;
}
{/*const eliminarObjeto = async (key) =>{

    localStorage.removeItem(key)
}*/}


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