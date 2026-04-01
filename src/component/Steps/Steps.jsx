import packageImg from '../../assets/package.png';
import rocketImg from '../../assets/rocket.png';
import userImg from '../../assets/user.png';
const Steps = () => {
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='my-7 flex flex-col items-center gap-3'>
                <h1 className='font-extrabold text-2xl md:text-5xl'>Get Started in 3 Steps</h1>
            <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>
      <div className='my-10 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                {/* single cart 1*/}
    <div className="card bg-base-100 w-96 shadow-md p-3">

<div className='flex justify-end items-center'>
      <div className="w-10 h-10 rounded-full bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] flex justify-center items-center text-white font-bold text-xl">
    1
  </div>
</div>

<div className='flex justify-center items-center'>
      <div className="w-20 h-20 rounded-full bg-linear-to-r from-[rgba(79,57,246,0.1)] to-[rgba(149,20,250,0.1)] flex justify-center items-center">
    <img 
      src={userImg}
      
      className="rounded-full max-w-14 " />
  </div>
</div>
  <div className="card-body items-center text-center">
    <h2 className="font-bold text-2xl">Create Account</h2>
    <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
  </div>
    </div>
    {/* single cart 2*/}
    <div className="card bg-base-100 w-96 shadow-md p-3">

<div className='flex justify-end items-center'>
      <div className="w-10 h-10 rounded-full bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] flex justify-center items-center text-white font-bold text-xl">
    2
  </div>
</div>

<div className='flex justify-center items-center'>
      <div className="w-20 h-20 rounded-full bg-linear-to-r from-[rgba(79,57,246,0.1)] to-[rgba(149,20,250,0.1)] flex justify-center items-center">
    <img 
      src={packageImg}
      
      className="rounded-full max-w-14 " />
  </div>
</div>
  <div className="card-body items-center text-center">
    <h2 className="font-bold text-2xl">Choose Products</h2>
    <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
  </div>
    </div>
    {/* single cart 3*/}
    <div className="card bg-base-100 w-96 shadow-md p-3">

<div className='flex justify-end items-center'>
      <div className="w-10 h-10 rounded-full bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] flex justify-center items-center text-white font-bold text-xl">
    3
  </div>
</div>

<div className='flex justify-center items-center'>
      <div className="w-20 h-20 rounded-full bg-linear-to-r from-[rgba(79,57,246,0.1)] to-[rgba(149,20,250,0.1)] flex justify-center items-center">
    <img 
      src={rocketImg}
      
      className="rounded-full max-w-14" />
  </div>
</div>
  <div className="card-body items-center text-center">
    <h2 className="font-bold text-2xl">Start Creating</h2>
    <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
  </div>
    </div>
            </div>
        </div>
    );
};

export default Steps;