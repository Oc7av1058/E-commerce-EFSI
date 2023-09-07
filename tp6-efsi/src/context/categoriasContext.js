import React,{createContext,useState, useEffect} from 'react';
import Producto from '../pages/productos';
import axios from 'axios';
export const CategoriaContext = createContext();

const CategoriaProvider = (props) => {
    const [categorias, setCategorias] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
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
   }, []); 
    

    return (
        <CategoriaContext.Provider
            value={{         
                categorias,
                getCategorias,
                selectedCategory,
                setSelectedCategory
            }
            }
        >
            {props.children}
        </CategoriaContext.Provider>
    )
}

export default CategoriaProvider;