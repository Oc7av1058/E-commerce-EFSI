import React,{createContext,useState, useEffect} from 'react';
import axios from 'axios';
export const ProductoContext = createContext();

const ProductoProvider = (props) => {   
    const [productos, setProductos] = useState([]);    
    const [producto, setProducto] = useState({}); 
    const getProductos = async () =>{        
        await axios
        .get("https://dummyjson.com/products")
        .then((result) => {
            
            setProductos(result.data.products);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    const getProductosById = async (id) =>{        
        await axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((result) => {
            console.log("llegue al getProductosById")
            setProducto(result.data);
            console.log("producto recien obtenido con el id:", producto)
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
                producto,
                getProductos,
                getProductosById, 
            }}
        >
            {props.children}
        </ProductoContext.Provider>
    )
}

export default ProductoProvider;
