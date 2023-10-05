import react from 'react';
import React, { useContext, useEffect } from 'react'
import { Link, Outlet } from "react-router-dom";
import { CarritoContext } from '../context/carritoContext';

export default function ProductoEnCarrito({producto}) {
  const { eliminarProducto } = useContext(CarritoContext);
  const { id, title, description, price, category, images } = producto || {};
  const handleOnClick = ()=>{
    eliminarProducto(id);
  }
  return(
<>
{!producto ? (
<div>loading</div>
):(
                   <tr>
                    <td class="container1">
                      <img src={images[0]} alt="Image" class="container2" width="100%" height="auto" />
                    </td>
                    <td class="product-name">
                      <h2 class="h5 text-black">{title}</h2>
                    </td>
                    <td>${price}</td>
                    <td>
                      <div class="input-group mb-3 styleCarrito" >
                        <div class="input-group-prepend">
                          <button class="btn btn-outline-primary js-btn-minus" type="button">&minus;</button>
                        </div>
                        <input type="text" class="form-control text-center" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                        <div class="input-group-append">
                          <button class="btn btn-outline-primary js-btn-plus" type="button">&plus;</button>
                        </div>
                      </div>

                    </td>
                    <td>$49.00</td>
                    <td><button onClick={handleOnClick} class="btn btn-primary btn-sm">X</button></td>
                  </tr>

)}               
</>

)

}