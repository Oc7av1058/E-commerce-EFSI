import React,{createContext,useState} from 'react';

export const ProductoContext = createContext();

const ProductoProvider = (props) => {
    const [producto, setProducto] = useState([{
        id:1,
        nombre: "vestido blanco",
        precio: 100,
        imagen: ""

    }]);    
const nombre = 'hola';
    return (
        <PersonasContext.Provider
            value={               
                producto  
            }
        >
            {props.children}
        </PersonasContext.Provider>
    )
}

export default PersonasProvider;