import ShoppingCard from '../../assets/shopping-cart.png';

const Navbar = () => {
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
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
            <img className='w-[24px]' src={ShoppingCard} alt="Shopping-Cart" />
            <span className="badge badge-xs  indicator-item  bg-red-500 text-xs text-white p-1">8</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
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