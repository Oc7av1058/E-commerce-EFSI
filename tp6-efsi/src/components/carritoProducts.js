import react from 'react';
import { Link, Outlet } from "react-router-dom";
import ProductoEnCarrito from './productoEnCarrito';
export default function CarritoProducts({productos}) {
  
    return(
<>
<div class="row mb-5">          
            <div class="site-blocks-table">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th class="product-thumbnail">Image</th>
                    <th class="product-name">Product</th>
                    <th class="product-price">Price</th>
                    {/*<th class="product-quantity">Quantity</th>
                    <th class="product-total">Total</th>*/}
                    <th class="product-remove">Remove</th>
                  </tr>
                </thead>
                <tbody>
                {
                        productos.map((prod) => (
                        
                        <ProductoEnCarrito producto={prod}/>
                        
                        ))
                    }  
                  
                </tbody>
              </table>
            </div>          
        </div>
</>

)

}