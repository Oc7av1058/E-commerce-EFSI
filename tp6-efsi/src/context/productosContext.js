import React,{createContext,useState, useEffect} from 'react';
import axios from 'axios';
export const ProductoContext = createContext();

const ProductoProvider = (props) => {   
    const [productos, setProducto] = useState({});    
    
    const getProductos = async () =>{        
        await axios
        .get("https://dummyjson.com/products")
        .then((result) => {
            
            setProducto(result.data.products);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        console.log('se va a cargar los productos')
        getProductos();
    }, []);     
    
    return (
        <ProductoContext.Provider
            value={{               
                productos,
                getProductos 
            }}
        >
            {props.children}
        </ProductoContext.Provider>
    )
}

export default ProductoProvider;
