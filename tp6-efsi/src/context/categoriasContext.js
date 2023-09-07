import React,{createContext,useState, useEffect} from 'react';
import Producto from '../pages/productos';
import axios from 'axios';
export const CategoriaContext = createContext();

const CategoriaProvider = (props) => {
    const [categoria, setCategoria] = useState([{}]);
    const getCategorias = async () =>{        
        await axios
        .get("https://dummyjson.com/products/categories")
        .then((result) => {
            
            setCategoria(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }    
    useEffect(() => {
        getCategorias();
   }, []); 
    

    return (
        <CategoriaContext.Provider
            value={{         
                categoria,
                getCategorias
            }
            }
        >
            {props.children}
        </CategoriaContext.Provider>
    )
}

export default CategoriaProvider;