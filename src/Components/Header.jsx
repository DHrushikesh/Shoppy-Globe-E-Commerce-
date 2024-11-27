import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";


import { Link } from "react-router-dom";

function Header(){

    const selector = useSelector((state)=>state.cart.cartitems)

    return(
        <>
            {/* Container for the entire header */}
            <div className="h-[75px] w-full flex items-center bg-gray-800 text-white font-poppins text-2xl border-b-2 border-orange-500 shadow-lg">
                
                {/* Wrapper to center the content inside the header */}
                <div className="w-3/4 ml-auto mr-auto flex justify-between items-center">

                {/* Logo: Only visible on small screens and above */}
                <div className="text-center font-bold hidden sm:block">
                    ShoppyGlobe
                </div>

                {/* Navigation Links */}
                <div className="flex justify-center items-center mr-8 gap-6">
                    {/* Link to Products page */}
                    <Link to={"/"}>
                    <p className="hover:text-orange-500 text-center font-bold">
                        Products
                    </p>
                    </Link>

                    {/* Cart Icon with Item Count */}
                    <div>
                    <Link to={"/Cart"}>
                        <FaCartShopping className="inline hover:text-orange-500 text-center text-white size-6" />
                        {/* Item count badge */}
                        <span className="text-lg font-serif text-orange-600 font-bold rounded-full ml-1 animate-pulse">
                        {selector.length}
                        </span>
                    </Link>
                    </div>

                    {/* Link to Checkout page */}
                    <Link to={"Checkout"}>
                    <p className="hover:text-orange-500 text-center font-bold">
                        Checkout
                    </p>
                    </Link>
                </div>
                </div>
            </div>
        </>

    )
}

export default Header