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
import Header from "../Components/Header.tsx";

const products = [
    { id: 1, name: "Ethereal", image: image1, price: "$89" },
    { id: 2, name: "Celestial", image: image2, price: "$79" },
    { id: 3, name: "Mystique", image: image3, price: "$95" },
    { id: 4, name: "Radiance", image: image4, price: "$82" },
    { id: 5, name: "Seraph", image: image5, price: "$88" },
    { id: 6, name: "Divinity", image: image6, price: "$91" },
    { id: 7, name: "Enigma", image: image7, price: "$76" },
    { id: 8, name: "Halo", image: image8, price: "$85" },
    { id: 9, name: "Aurora", image: image9, price: "$92" },
  ];

const Home = () => {
  return (
    <div className="mx-auto p-4">
        <Header />
      <div className="flex flex-row 
      gap-x-4 gap-y-4 
      sm:gap-x-8 sm:gap-y-8
      md:gap-x-12 md:gap-y-12 
      lg:gap-x-16 lg:gap-y-16 
      flex-wrap items-center justify-center">
    {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div>
    </div>
  )
}

export default Home;






