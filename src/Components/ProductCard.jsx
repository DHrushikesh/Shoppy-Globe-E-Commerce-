import { IoIosStar } from "react-icons/io";

function ProductCards(prop){
    return(
        <div className="bg-white mt-10 m-4 h-[600px] md:h-[550px] shadow-2xl opacity-95 rounded-lg hover:opacity-100 border-2 border-gray-800">
            
            {/* Product Image */}
            <img className="rounded-lg size-[400px]"
                src={`${prop.productDetails.thumbnail}`}
                alt={prop.productDetails.title} />
            
            {/* Product Details Container */}
            <div className="font-bold flex flex-col items-center mt-[10px] px-[50px]">

                {/* Product Title */}
                <h1>{prop.productDetails.title}</h1>
                
                {/* Product Rating */}
                <span>
                <IoIosStar className={`inline ${prop.productDetails.rating > 3.5 ? "text-green-500" : "text-yellow-400"} size-6 mr-1`} />
                {prop.productDetails.rating}
                </span>
                
                {/* Product Price */}
                <span>{`$${prop.productDetails.price}`}</span>
                
                {/* Shipping Information */}
                <span>{prop.productDetails.shippingInformation}</span>
                
                {/* View More Button */}
                <p className="font-bold mt-1 hover:text-orange-500 cursor-pointer px-1 hover:bg-white text-white bg-orange-500 rounded-lg border-2 border-orange-500">
                View More
                </p>
            </div>
        </div>

    )
}
export default ProductCards;