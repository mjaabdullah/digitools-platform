
const Rating = () => {
    return (
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around">
                <div className="flex flex-col items-center gap-1 py-6">
                    <h2 className="font-extrabold text-3xl md:text-6xl">50K+</h2>
                    <p className=" text-2xl">Active Users</p>
                </div>
                <div className="flex flex-col items-center gap-1 py-6">
                    <h2 className="font-extrabold text-3xl md:text-6xl">200+</h2>
                    <p className=" text-2xl">Premium Tools</p>
                </div>
                <div className="flex flex-col items-center gap-1 py-6">
                    <h2 className="font-extrabold text-3xl md:text-6xl">4.5</h2>
                    <p className=" text-2xl">Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Rating;