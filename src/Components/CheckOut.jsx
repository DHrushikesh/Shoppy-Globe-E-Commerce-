import { useSelector } from "react-redux";
import { useMemo  } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router";


function Checkout() {

    const selector = useSelector((state)=>state.cart.cartitems)
    const navigate = useNavigate()
    const subtotal = useMemo(() => 
    { return selector.reduce((sum, product) => 
        { return sum + (product.price * product.quantity); }, 0); 
    }, [selector])
    
    if(subtotal == 0 )
    { swal("Nothing In Cart" , " Add Something in your Cart " , "error")}

    function handlesubmit(e){
      e.preventDefault(); 
      swal("Order Placed", "Order Placed Successfully !!", "success"); navigate("/");
    }

  return (
    <>
      <div className="my-20 leading-loose h-[86dvh] flex justify-center items-center">
        
        {/* Form Container */}
        <form className="max-w-xl m-4 p-10 bg-white rounded-lg shadow-xl" onSubmit={(e)=>handlesubmit(e)}>

          <h1 className="text-center text-green-500 font-sans"> { subtotal ==0 ? <p className="text-red-600 font-sans"> No Items In Cart </p> : 
          `There are ${selector.length} items in Cart ` } </h1>

          <p className="text-gray-800 font-medium">Your information</p>

          {/* Name Input Field */}
          <div>
            <label className="block text-sm text-gray-700">Name</label>
            <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" 
            id="check_name" name="check_name" type="text" required placeholder="Your Name" aria-label="Name" />
          </div>

          {/* Email Input Field */}
          <div className="mt-2">
            <label className="block text-sm text-gray-600" >Email</label>
            <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" 
            id="check_email" name="check_email" type="email" required placeholder="Your Email" aria-label="Email" />
          </div>

          {/* Address Input Field */}
          <div className="mt-2">
            <label className="block text-sm text-gray-600" >Address</label>
            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" 
            id="check_address" name="check_address" type="text" required placeholder="Street" aria-label="Address" />
          </div>

          {/* City Input Field */}
          <div className="mt-2">
            <label className="block text-sm text-gray-600" >City</label>
            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" 
            id="check_city" name="check_city" type="text" required placeholder="City" aria-label="City" />
          </div>

          {/* Country Input Field */}
          <div className="inline-block mt-2 w-1/2 pr-1">
            <label className="block text-sm text-gray-600" >Country</label>
            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" 
            id="check_country" name="check_country" type="text" required placeholder="Country" aria-label="Country" />
          </div>

          {/* Zip Code Input Field */}
          <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
            <label className="block text-sm text-gray-600" >Zip</label>
            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" 
            id="check_zip" name="check_zip" type="number" required placeholder="Zip" aria-label="Zip" />
          </div>

          <p className="mt-4 text-gray-800 font-medium">Payment information</p>
         
          {/* Upi Information Input Field */}
          <div>
            <label className="block mt-2  text-sm text-gray-600" >UPI ID</label>
            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" 
            id="check_upi" name="check_upi" type="text" required placeholder="9****543@okicici" aria-label="UPI" />
          </div>

          

          {/* Submit Button */}
          <div className="mt-4">
            <button className=" px-4 py-1 text-white font-light tracking-wider bg-orange-500 text-center rounded" type="submit">
              Pay  ${subtotal.toFixed(2) }
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Checkout;
