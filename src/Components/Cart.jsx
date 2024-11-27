import { useSelector , useDispatch } from "react-redux"
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { modifyQuantity } from "../assets/cartslice";
import { useMemo } from "react";
import { Link } from "react-router-dom";



function Cart(){

    const dispatch = useDispatch()
    const selector = useSelector((state)=>state.cart.cartitems)

    const subtotal = useMemo(() => 
        { return selector.reduce((sum, product) => 
            { return sum + (product.price * product.quantity); }, 0); 
        }, [selector])

    function handledelete(proid){
        dispatch(modifyQuantity({ itemid: proid, operation: "decrease" , amount:null })); 
    }
    function handleadd(proid){
        dispatch(modifyQuantity({ itemid: proid, operation: "increase" , amount:null}));   
    }
    function handlecustom(value , proid){
        dispatch(modifyQuantity({ itemid: proid, operation: "custom" , amount:value })); 
    }

    return(
        <>
            <div className="bg-[#d6e6eb] min-h-dvh w-full overflow-hidden">

                <div className="bg-[#ffffff] shadow-lg md:w-4/5 min-h-dvh mx-auto py-4 flex flex-col items-center overflow-auto">

                {/* Cart Options */}
                <table className="shadow-lg my-4 mx-auto border-collapse border-2 border-orange-500 ">
                    <thead>
                        <tr className="min-w-64">
                            <th className="border border-orange-500 px-4 py-2 text-sm sm:text-base">No.</th>
                            <th className="border border-orange-500 px-4 py-2 text-sm sm:text-base w-44">Image</th>
                            <th className="border border-orange-500 px-4 py-2 text-sm sm:text-base w-80">Product</th>
                            <th className="border border-orange-500 px-4 py-2 text-sm sm:text-base">Price</th>
                            <th className="border border-orange-500 px-4 py-2 text-sm sm:text-base w-44">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selector.map(( item , index)=>{
                                const product =selector.find((product)=>(product.id==item.id))
                                return(
                                <tr key={index} className="shadow-lg min-w-80 text-center font-bold border-2 border-orange-500 ">
                                    <td className="border-b-2 border-orange-500">{index+1}</td>
                                    <td className="border-b-2 border-orange-500"><img className="" src={`${item.thumbnail}`} alt={`${item.title}`} /></td>
                                    <td className="border-b-2 border-orange-500">{item.title}</td>
                                    <td className="border-b-2 border-orange-500">{`$${item.price}`}</td>
                                    <td>
                                        <div className="flex justify-center  items-center">

                                            <button onClick={()=>(handledelete(item.id))} className="mx-3"><MdDelete className="fill-red-600"/></button>
                                            <input  onChange={(e)=>handlecustom(e.target.value , item.id)}
                                             value={product.quantity} 
                                            className="w-12 text-center border-2
                                            rounded-lg border-orange-500"  type="number"  />
                                            <button onClick={()=>handleadd(item.id)} className="ml-2"><IoMdAdd className="fill-green-600" /></button>
                                        </div>
                                    </td>
                                </tr>
                                )})
                        }
                    </tbody>
                </table>
                
                    {/* Total Amount !! */}
                    <div className="font-bold h-24 border-x-2 flex justify-evenly items-center px-5 border-orange-500 w-80">
                        <h1>Sub Cart Total : </h1>
                        <p>{subtotal.toFixed(2)}</p>

                        <Link to={"/Checkout"}>
                        <p className="font-bold hover:text-orange-500 cursor-pointer ml-4 px-1
                        hover:bg-white text-white bg-orange-500 rounded-lg border-2 border-orange-500"> 
                        Proceed </p>
                        </Link>
                    </div>
                
                </div>
            
            </div>    
        </>
    )
}

export default Cart