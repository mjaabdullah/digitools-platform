import { use } from "react";
import Product from "./Product";

const Products = ({productPromise, cart, setCart}) => {
    
    const products = use(productPromise)
    return (
        <div className="max-w-7xl mx-auto p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {products.map((product, index) => <Product key={index} product={product} cart={cart} setCart={setCart}/>)}
        </div>
    );
};

export default Products;