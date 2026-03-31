import { use } from "react";
import Product from "./Product";

const Products = ({productPromise, cart, setCart}) => {
    
    const products = use(productPromise)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => <Product key={product.id} product={product} cart={cart} setCart={setCart}/>)}
        </div>
    );
};

export default Products;