import ShoppingCard from '../../assets/shopping-cart.png';

const Navbar = ({cart}) => {
    return (
        <nav className='bg-white md:sticky top-0 z-50'>
<div className="max-w-7xl mx-auto navbar justify-between flex-col lg:flex-row">
  <div >
    <a className="text-4xl font-bold bg-linear-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] bg-clip-text text-transparent">DigiTools</a>
  </div>
  <div className='text-[#101727] '>
    <ul className="flex gap-4 menu sm:menu-horizontal px-1 items-center">
        <li><a>Products</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Testimonials</a></li>
        <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="flex space-x-3">
    <div className="dropdown dropdown-end">
      <div role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
            <img className='w-[24px]' src={ShoppingCard} alt="Shopping-Cart" />
            {cart.length > 0 && (<span className="badge badge-xs  indicator-item  bg-red-500 text-xs text-white p-1">{cart.length}</span>)}
        </div>
      </div>

    </div>
    <div className="flex gap-4">
      <button>Login</button>
      <button className='btn btn-primary bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] text-white rounded-3xl'>Get Started</button>
    </div>
  </div>
</div>
        </nav>
    );
};

export default Navbar;