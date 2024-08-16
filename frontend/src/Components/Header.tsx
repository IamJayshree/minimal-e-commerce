import CartIcon from "./CartIcon";

const Header = () => {
    return(
       <header className="flex w-full 
       justify-between items-center text-center
       p-6
       ">
       <div className="text-xl">shop</div>
       <CartIcon />
     </header>
    )
   }

   
export default Header;