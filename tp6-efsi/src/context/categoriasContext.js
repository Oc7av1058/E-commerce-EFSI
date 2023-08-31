import React,{createContext,useState} from 'react';
import Producto from '../pages/productos';

export const CategoriaContext = createContext();

const CategoriaProvider = (props) => {
    const [categoria, setProducto] = useState([{}]);    

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