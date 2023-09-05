import React,{createContext,useState, useEffect} from 'react';
import Producto from '../pages/productos';
import axios from 'axios';
export const CategoriaContext = createContext();

const CategoriaProvider = (props) => {
    const [categoria, setCategoria] = useState([{}]);    
    useEffect(() => {
        
        axios
        .get("https://dummyjson.com/products/categories")
        .then((result) => {
            
            setCategoria(result.data);
        })
        .catch((error) => {
          console.log(error);
        });


   }, []); 
    

    return (
        <CategoriaContext.Provider
            value={               
                categoria
            }
        >
            {props.children}
        </CategoriaContext.Provider>
    )
}

export default CategoriaProvider;