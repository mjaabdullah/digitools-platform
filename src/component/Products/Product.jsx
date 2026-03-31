import { useState } from "react";

const getImage = (imageName) => {
  return new URL(`../../assets/products/${imageName}`, import.meta.url).href;
};
const Product = ({product, cart, setCart}) => {
  
  const [addedToCart, SetAddedToCart] = useState(0);
    const handleProduct = (item) => {
      SetAddedToCart(1);
      
      const found = cart.find(i => i.Name === item.Name);
      if(found) {
        alert('item already exist');
      } else {
        setCart([...cart,item]);
      }

    }
    return (
        <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <div className="badge badge-xs badge-warning self-end">{product.TagType}</div>
    <div className="w-10 h-10 rounded-full ring-1 ring-gray-200 flex justify-center items-center"><img className="max-w-6 max-h-6" src={getImage(product.Icon)} alt="" /></div>
    <h2 className="text-2xl font-bold">{product.Name}</h2>
    <p>
        {product.Description}
    </p>
    <div className="text-xl">
      <span className="font-bold">${product.Price}</span><span className="text-sm">/{product.Period}</span>
    </div>
    <ul className="mt-1 flex flex-col gap-2 text-xs">
      {
        product.Features.map((feature, index) => {
            return (
                <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{feature}</span>
      </li>
            )
        })
      }      
    </ul>
    <div className="mt-1">
      <button onClick={() => handleProduct(product)} className={`btn btn-block text-white rounded-3xl ${
        addedToCart? 'bg-green-600' : 'bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)]'
      }`}>{addedToCart ? 'Added to Cart!': 'Buy Now'}</button>
    </div>
  </div>
</div>
    );
};

export default Product;