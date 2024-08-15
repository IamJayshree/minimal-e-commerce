interface CardProps {
    name: string;
    image: string;
    price: string;
}

const ProductCard: React.FC<CardProps> = ({ name, image, price }) => {
    return (
        <div className="font-sans w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="rounded-xl bg-white flex flex-col items-center ">
                <img src={image} className='rounded-xl mb-2' alt={name} />
                <div className="flex flex-row justify-between w-full px-4 py-2">
                    <h2 className="font-semibold text-slate-700">{name}</h2>
                    <h4 className="text-gray-500">{price}</h4>
                </div>
                <div className="w-full flex justify-end px-4 pb-2">
                    <button className="hover:shadow-md
                    hover:bg-black hover:text-white
                    px-4 py-2 
                    text-black
                    shadow-lg rounded-full bg-slate-200 transition-all duration-300">
                        add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
