import SearchBar from "./SearchBar"
import { useEffect, useState } from "react";
import { useFetchingProducts } from "../assets/usefetchingproduct"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ProductCards from "./ProductCard";
import { Link } from "react-router-dom";

function Products(){

    const [ productname , setproductname ] = useState()
    const { loading , data , error } = useFetchingProducts();   
    const [ filteredProducts , setfilteredProducts ] = useState([]); 

    useEffect(()=>{
        if(data){
            setfilteredProducts(data)
        }
    },[data])

    function handlesearch(value){
        
        setproductname(value)
        
        const tmparray = data.filter((e)=>e.title.toLowerCase().includes(value.toLowerCase()))

        setfilteredProducts(tmparray)
    } 

    return(
        <>
            <div className="bg-[#d6e6eb] min-h-dvh w-full">

                <div className="bg-white shadow-lg w-4/5 min-h-dvh mx-auto  flex-col items-center">

                    <SearchBar handlefunc={handlesearch} />

                    {loading && <AiOutlineLoading3Quarters className=" size-10 animate-spin" />}
                    {error && <div className="text-red-500 font-bold text-center mt-4">{error}</div>}
                    
                    <div className="mx-auto mt-4  flex flex-wrap">
                {/* conditions to print | to Display Products */}
                {
                    (filteredProducts.length!=0  ) ? (
                    filteredProducts.map((product)=>(
                        <Link key={product.id} to={`/Products/${product.id}`} className="mx-auto pb-4 mt-4 flex flex-wrap" >
                            <ProductCards productDetails={product} />
                        </Link>                    
                        )
                    )
                    ):
                    (productname!=null) &&
                    <div className=" font-bold text-center"> No items Found with Product Name : {productname} </div>
                }
                    </div>

                </div>

            </div>

        </>
    )   
}

export default Products