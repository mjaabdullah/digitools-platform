
const Workflow = () => {
    return (
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
        <div className="max-w-7xl mx-auto space-y-3 flex flex-col items-center px-3 py-28">
            <h1 className="font-extrabold text-xl lg:text-4xl">Ready to Transform Your Workflow?</h1>
            <p>Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.</p>
            <div className="flex gap-3">
                <button
      className={` py-2 px-8 rounded-3xl font-semibold text-base transition-all bg-white text-purple-600`}     
    >
      Explore Products
    </button>
    <button
      className={` py-2 px-8 rounded-3xl font-semibold text-base transition-all ring ring-white`}     
    >
      View Pricing
    </button>
            </div>
            <p>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
        </div>
    );
};

export default Workflow;