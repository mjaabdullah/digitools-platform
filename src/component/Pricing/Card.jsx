
const Card = ({price}) => {
    return (
<div className={`card bg-base-100 shadow-sm ${price.popular && 'bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] text-white'}`}>
  <div className="card-body relative">
    {price.popular && (<div className="absolute -top-3 left-0 right-0 mx-auto badge badge-strong badge-warning">Most Popular</div>)}
    <h2 className="text-2xl font-bold">{price.plan}</h2>
    <p>
        {price.subtitle}
    </p>
    <div className="text-xl">
      <span className="font-bold text-4xl">${price.price}</span><span className="">/{price.period}</span>
    </div>
    <ul className="mt-1 flex flex-col gap-2 text-xs">
      {
        price.features.map((feature, index) => {
            return (
                <li key={index}>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{feature}</span>
      </li>
            )
        })
      }      
    </ul>
    <div className="mt-1">
      <button
      className={`w-full py-2 rounded-3xl font-semibold text-base transition-all ${price.popular 
        ? "bg-white text-purple-600 hover:bg-gray-100" 
        : "bg-linear-to-r from-purple-600 to-violet-600 text-white hover:brightness-110"
      }`}
    >
      {price.buttonText}
    </button>
    </div>
  </div>
        </div>
    );
};

export default Card;