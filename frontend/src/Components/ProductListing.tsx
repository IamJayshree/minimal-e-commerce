import image6 from "../assets/perfume6.jpg";


interface ListingProps{
    id: string,
    name: string,
    price: string,
    designs: string[],
    description: string,
    image: string,
}

const ProductListing:React.FC<ListingProps> = ({name, price, designs, description, image}) => {
  
    const smallImages = "hover:border-2 hover:border-slate-600 opacity-80 rounded-md mb-2"

    name = "Parfume de lauve"
    price = "$56"
    designs = ["parexue", "desae", "loxkeq"]
    description = "Parfume de Lauve captures the essence of timeless elegance with its exquisite blend of floral opulence and warm, ambered musk. This sophisticated scent lingers like a soft, romantic memory, enveloping you in a veil of refined allure. With harmonious notes of rare botanicals and luxurious accords, Parfume de Lauve epitomizes true sophistication in every delicate drop."
    image = image6
  
    return (
    <div>
        <div className="flex flex-row gap-x-12">
        <div className="flex flex-col w-1/2">
            <img src={image} className='rounded-xl mb-2' alt="main" />

            <div className="flex flex-row w-1/6 gap-x-6 justify-between 
            ">
                <img src={image} className={smallImages} alt={name} />
                <img src={image} className={smallImages} alt={name} />
                <img src={image} className={smallImages} alt={name} />
                <img src={image} className={smallImages} alt={name} />
                <img src={image} className={smallImages} alt={name} />
            </div>
        </div>
        <div className="flex flex-col w-1/2 text-left p-4 gap-y-4">
            <h3 className="font-bold text-2xl"> {name} </h3>
            <h3 className="text-3xl font-semibold"> {price} </h3>
            <h3> Model: <h3> {designs} </h3> </h3>
            <h3 className="text-slate-500"> {description} </h3>
            <button className="hover:shadow-md
                    hover:bg-black hover:text-white
                    px-4 py-2 
                    text-black
                    w-1/4
                    shadow-lg rounded-full bg-slate-200 transition-all duration-300">
                        add to cart
            </button>
        </div>
        </div>
    </div>
  )
}

export default ProductListing;