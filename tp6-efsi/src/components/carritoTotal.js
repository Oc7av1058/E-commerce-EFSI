import react, { useEffect, useState, useContext } from 'react';
import { Link, Outlet } from "react-router-dom";
import { CarritoContext } from '../context/carritoContext';

export default function CarritoTotal({productos}) {
  console.log("productos en carrito", productos);
  const { total, calculartotal, setTotal } = useContext(CarritoContext);


  useEffect(()=>{
    calculartotal(productos);
   
},[productos])


    return(
<>
<div class="row">
          <div class="col-md-6 pl-5">
            <div class="row justify-content-end">
              <div class="col-md-7">
                <div class="row">
                  <div class="col-md-12 text-right border-bottom mb-5">
                    <h3 class="text-black h4 text-uppercase">Cart Totals</h3>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-md-6">
                    <span class="text-black">Sin IVA</span>
                  </div>
                  <div class="col-md-6 text-right">
                    <strong class="text-black">{total}</strong>
                  </div>
                </div>
                <div class="row mb-5">
                  <div class="col-md-6">
                    <span class="text-black">Total</span>
                  </div>
                  <div class="col-md-6 text-right">
                    <strong class="text-black">{total*1.21}</strong>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <button class="btn btn-primary btn-lg py-3 btn-block" onclick="window.location='checkout.html'">Proceed To Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</>

)

}




