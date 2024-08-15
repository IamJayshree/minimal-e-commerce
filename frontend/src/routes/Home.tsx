import ProductCard from "../Components/ProductCard";
import image1 from "../assets/perfume1.jpg";
import image2 from "../assets/perfume2.jpg";
import image3 from "../assets/perfume3.jpg";
import image4 from "../assets/perfume4.jpg";
import image5 from "../assets/perfume5.jpg";
import image6 from "../assets/perfume6.jpg";
import image7 from "../assets/perfume7.jpg";
import image8 from "../assets/perfume8.jpg";
import image9 from "../assets/perfume9.jpg";



const Home = () => {
  return (
    <div className="">
        <Header />
      <div className="flex flex-row 
      gap-x-4 gap-y-4 
      sm:gap-x-8 sm:gap-y-8
      md:gap-x-12 md:gap-y-12 
      lg:gap-x-16 lg:gap-y-16 
      flex-wrap items-center justify-center">
       <ProductCard name="Ethereal" image={image1} price="$89" />
        <ProductCard name="Celestial" image={image2} price="$79" />
        <ProductCard name="Mystique" image={image3} price="$95" />
        <ProductCard name="Radiance" image={image4} price="$82" />
        <ProductCard name="Seraph" image={image5} price="$88" />
        <ProductCard name="Divinity" image={image6} price="$91" />
        <ProductCard name="Enigma" image={image7} price="$76" />
        <ProductCard name="Halo" image={image8} price="$85" />
        <ProductCard name="Aurora" image={image9} price="$92" />
      </div>
    </div>
  )
}

export default Home;


const Header = () => {
 return(
    <header className="flex w-full 
    justify-between items-center text-center
    p-6
    ">
    <div className="text-xl">shop</div>
  </header>
 )
}
