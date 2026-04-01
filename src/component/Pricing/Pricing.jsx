import { use } from "react";
import Card from "./Card";

const getPrice = async () => {
    const res = await fetch('./pricing.json');
    return res.json();
}

const pricePromise = getPrice();
const Pricing = () => {
    const prices = use(pricePromise);
    return (
        <div className="max-w-7xl mx-auto">
            <div className='my-7 p-1 text-center flex flex-col items-center gap-3'>
                <h1 className='font-extrabold text-2xl md:text-5xl'>Simple, Transparent Pricing</h1>
            <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 my-6 p-1 sm:p-0">
                {prices.map((price, key)=> <Card key={key} price={price}/>)}
            </div>
        </div>
    );
};

export default Pricing;