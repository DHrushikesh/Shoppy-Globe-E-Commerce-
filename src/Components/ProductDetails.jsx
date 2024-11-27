import { useParams ,  Link , useNavigate } from "react-router-dom"
import { useFetchingProducts } from "../assets/usefetchingproduct";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useEffect , useState } from "react";
import { IoIosStar } from "react-icons/io";
import { IoChevronBackCircle } from "react-icons/io5";
import { useDispatch , useSelector } from "react-redux"
import { Addtocart } from "../assets/cartslice";
import swal from "sweetalert";


function ProductDetails(){

    
const navigate = useNavigate()
const selector = useSelector((state)=>state.cart.cartitems)
const dispatch = useDispatch();
const Productid =useParams();
const {  data } = useFetchingProducts();
const [ value ,setvalue ] = useState();

useEffect(()=>{
    const tmp = data.filter((product)=>(product.id==Productid.id))
    setvalue(tmp[0])
},[data , Productid])

function handleAddtocart(product){

    if(selector.some((item)=>item.id===product.id))
    {
        navigate("/cart")
    }
    else{
        dispatch(Addtocart(product))
        swal("Done","Added to Cart","success")
    }
}

    return(
        <div className="bg-[#D6D6D6] min-h-[92dvh] py-5">
            
            
            {/* Go back Option */}
            <Link to={"/"}>
            <IoChevronBackCircle className="text-orange-500 ml-auto border-2 border-slate-950 rounded-full p- my-4  mr-auto  font-sans text-4xl cursor-pointer" />
            </Link>

            {/* Picture & Prduct Details */}
            <div className="flex flex-wrap flex-grow-0 gap-4 mx-auto px-5 py-8  h-full  w-4/5 border-2 border-b-0 border-red-500  bg-white">

          

            {/* Picture */}
                <div className="shadow-lg ml-auto rounded-2xl size-[400px]">
                    <img className="size-full" src={value ? `${value.thumbnail}` : <AiOutlineLoading3Quarters className=" size-10 animate-spin" /> } 
                    alt={value ? `${ value.title}` : <AiOutlineLoading3Quarters className=" size-10 animate-spin" />  } />
                </div>
                
                {/* right Side Details */}
                <div className="border-2 border-orange-500 mr-auto shadow-lg size-[400px] flex flex-col justify-center">
                    {(value)?(
                    <div className="font-bold flex flex-col items-center gap-3">
                        
                        {/* name */}
                        <h1 className="text-4xl font-serif text-center"> {value.title} </h1>
                        
                        {/* rating */}
                        <p><IoIosStar className= {`inline  ${value.rating > 3.5 ? "text-green-500" : " text-yellow-400"} size-6 mr-3` }/>
                         {value.rating}</p>
                        
                        {/* Tags */}
                        <span> {value.tags.map((tags , inedsx)=>(
                            <span className="opacity-75 mx-2" key={inedsx}>#{tags}</span>
                        ))} </span>
                        
                        {/* price */}
                        <span className="font-bold"> {`Price : $${value.price}`}</span>
                        
                        {/* shipping Details */}
                        <span> {value.shippingInformation} </span>


                        <button onClick={()=>handleAddtocart(value)} className="font-bold mt-1 hover:text-orange-500 cursor-pointer px-1 shadow-lg
                        hover:bg-white text-white bg-orange-500 rounded-lg border-2 border-orange-500"> 
                        Add to Cart </button>

                    </div>
                    ) : 
                    <AiOutlineLoading3Quarters className=" size-44 items-center animate-spin" />
                    }
                </div>
            </div>

            {/* Description and Reviews */}
            
            <div className="flex flex-col justify-center text-center mt-8 mx-auto gap-3 py-4 
             min-h-40 w-4/5 border-2 border-t-0 border-red-500 bg-white">
            {(value)?(<>
                    <div>
                        <h1 className="font-bold text-2xl drop-shadow-lg">Description</h1>
                        <div className="border-3 border-blue-600 w-2/3 mx-auto my-4">
                            <p className="opacity-95">{value.description}</p>
                        </div>
                    </div>
                    <div> 
                        <h1 className="font-bold text-2xl drop-shadow-lg">Reviews</h1>
                        <div>
                            {value.reviews.map((review , index)=>(
                                <p key={index} className="my-4">
                                    <IoIosStar className= {`inline  ${review.rating > 3.5 ? "text-green-500" : " text-yellow-400"} size-6 mr-3` }/>
                                    <span className="font-bold">{review.reviewerName}</span>
                                    <span className="inline"> - {review.comment} </span>
                                </p>
                            ))}
                        </div>
                    </div>
                    </>)
                    :
                    <AiOutlineLoading3Quarters className=" size-44 items-center animate-spin" />
                }
            </div>
            

        </div>
    )
}
export default ProductDetails