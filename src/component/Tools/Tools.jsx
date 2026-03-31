import { useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";

const getProducts = async () => {
    const res = await fetch('./products.json');
    return res.json();
}

const productPromise = getProducts();

const Tools = ({cart, setCart}) => {

const [currentTab, setCurrentTab] = useState('Products');

const tabManager = (tab) => {

    setCurrentTab(tab);

}

    return (
        <div className="max-w-7xl mx-auto my-28 flex flex-col gap-2 items-center">
            <div className="max-w-2xl text-center space-y-2">
                <h1 className="text-5xl font-extrabold  text-[#101727]">Premium Digital Tools</h1>
                <p className="text-[#627382]text-center">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>

            <div className="tabs tabs-box rounded-full space-x-2">
  <input type="radio" name="products-tab" className="tab rounded-3xl px-6 font-semibold checked:bg-linear-to-r checked:from-[rgba(79,57,246,1)] checked:to-[rgba(149,20,250,1)] checked:text-white" aria-label="Products" checked={currentTab === "Products"}
  onClick={() => tabManager('Products')}
  />
  <input type="radio" name="card-tab" className="tab rounded-3xl px-6 font-semibold checked:bg-linear-to-r checked:from-[rgba(79,57,246,1)] checked:to-[rgba(149,20,250,1)] checked:text-white" aria-label={`Cart (${cart.length})`} checked={currentTab === "Cart"}
  onClick={()=> tabManager('Cart')}
  />
            </div>

    <div className="w-full">
           {(currentTab === "Products") ? 
           <Products productPromise={productPromise} cart={cart} setCart={setCart}/> : <Cart cart={cart} setCart={setCart}/>
           }     

    </div>
</div>
    );
};

export default Tools;