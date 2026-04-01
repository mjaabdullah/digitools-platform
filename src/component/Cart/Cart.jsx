import { toast } from 'react-toastify';
import ShoppingCard from '../../assets/shopping-cart.png';
const getImage = (imageName) => {
  return new URL(`../../assets/products/${imageName}`, import.meta.url).href;
};

const Cart = ({cart, setCart}) => {
    const handleDelete = (product)=> {
        const filterCart = cart.filter(item => item.Name !== product.Name);
        setCart([...filterCart]);
        toast.success('Successfully Deleted!')
    }
    const checkoutFunc = ()=> {
        setCart([]);
        toast.success('Order placed successfully!');
    }
    return (
        <div className=" bg-base-100 shadow-sm p-5 mt-10">
            <h3 className="font-bold text-2xl mb-6">Your Cart</h3>
            <div className="space-y-4">
                
    {cart.length > 0 && cart.map(product => 
    (<><div className="flex justify-between items-center bg-base-200 rounded-2xl px-5 py-2"> 
    <div className="flex items-center gap-4">
    <div className="p-3 rounded-full bg-white">
    <img className="max-w-6 max-h-6" src={getImage(product.Icon)} alt="" />
    </div>
     <div>
    <h4 className="font-semibold text-xl">{product.Name}</h4>
    <span className="font-medium text-sm">${product.Price}</span>
    </div>
    </div>
    <button onClick={() => handleDelete(product)} className="text-red-500 font-semibold cursor-pointer">Delete</button>
    </div>
    </>
    )
    )}
    {cart.length > 0 && (
    <>
    <div className="flex justify-between p-3">
        <span className="text-2xl">Total:</span>
        <span className="font-bold text-2xl">${cart.reduce((sum, item) => sum + item.Price, 0)}</span>
    </div>
    <button onClick={checkoutFunc} className="btn btn-block text-white rounded-3xl bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] py-4  text-xl">Proceed to Checkout</button>
    </>
    )}

    {cart.length === 0 && (
        <>
        <div className='w-full flex flex-col gap-3 items-center justify-center text-gray-500 py-7'>
            <img className='max-w-28' src={ShoppingCard} alt="" />
            <p>Your cart is empty!</p>
        </div>
        </>
    )}
                
            </div>
        </div>
    );
};

export default Cart;