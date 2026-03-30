import BannerImg from "../../assets/banner.png";
import CircleImg from "../../assets/circle.png";
const Banner = () => {
    return (
<div className="max-w-7xl mx-auto my-16">
    <div className="hero-content flex-col lg:flex-row-reverse justify-between">
    <img
      src={BannerImg}
      className="max-w-sm rounded-lg shadow-sx"
    />
    <div className="max-w-2xl space-y-4">
        <div className="bg-[#E1E7FF] font-medium rounded-3xl py-2 px-3 flex gap-1 items-center justify-center w-fit"> 
            <img className="w-4" src={CircleImg} alt="Circle" />
            <span className="bg-linear-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] bg-clip-text text-transparent">New: AI-Powered Tools Available</span>
            </div>
      <h1 className="text-7xl/20 font-extrabold text-[#101727]">Supercharge Your
        
        Digital Workflow</h1>
      <p className="text-[#627382]">
        Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.Explore Products
      </p>
      <div className="space-x-2">
        <button className='btn btn-primary bg-gradient-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] text-white rounded-3xl'>Explore Products</button>
      <button className='btn btn-outline btn-primary rounded-3xl'>Explore Products</button>
      </div>
    </div>
    </div>
</div>
    );
};

export default Banner;