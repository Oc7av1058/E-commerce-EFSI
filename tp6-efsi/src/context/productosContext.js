import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const ProductoContext = createContext();

const ProductoProvider = (props) => {
    const [productos, setProductos] = useState([]);
    const [producto, setProducto] = useState(null);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const getProductos = async () => {
        await axios
            .get("https://dummyjson.com/products")
            .then((result) => {

                setProductos(result.data.products);
                
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const getProductosById = async (id) => {
        console.log("llegue al getProductosById");
        await axios
            .get(`https://dummyjson.com/products/${id}`)
            .then((result) => {
                
                setProducto(result.data);                
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const getProductosByCategoria = async (categoria) => {
        if (categoria == null) {
            setProductosFiltrados(productos);
        }
        else {
            await axios
                .get(`https://dummyjson.com/products/category/${categoria}`)
                .then((result) => {
                    console.log("llegue al getProductosByCategoria")
                    setProductosFiltrados(result.data.products);

                })
                .catch((error) => {
                    console.log(error);
                });
        }
}
const getProductosFiltrados = async () => {
    await axios
        .get("https://dummyjson.com/products")
        .then((result) => {

            setProductosFiltrados(result.data.products);
            
        })
        .catch((error) => {
            console.log(error);
        });
}

    useEffect(() => {
        console.log('se va a cargar los productos');
        getProductos();
        getProductosFiltrados();
        console.log(productos)
    }, []);

    return (
        <ProductoContext.Provider
            value={{
                productos,
                producto,
                getProductos,
                getProductosById,
                getProductosByCategoria,
                productosFiltrados,
                setProductosFiltrados,
                getProductosFiltrados
            }}
        >
            {props.children}
        </ProductoContext.Provider>
    )
}

export default ProductoProvider;
