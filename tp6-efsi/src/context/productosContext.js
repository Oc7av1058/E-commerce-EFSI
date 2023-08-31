import React,{createContext,useState} from 'react';
import axios from 'axios';
export const ProductoContext = createContext();

const ProductoProvider = (props) => {
   
    const [productos, setProducto] = useState({});    
    
    axios
    .get("https://dummyjson.com/products")
    .then((result) => {
        
        setProducto(result.data.products);
    })
    .catch((error) => {
      console.log(error);
    });


    return (
        <ProductoContext.Provider
            value={               
                productos 
            }
        >
            {props.children}
        </ProductoContext.Provider>
    )
}

export default ProductoProvider;