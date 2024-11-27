import { FaSearch } from "react-icons/fa";
import { useState } from "react";

function SearchBar(prop){
    const {handlefunc} = prop
    const [searchedvalue , setsearchedvalue] = useState("Hello");
    function handleclick(){
        handlefunc(searchedvalue)
    }

    return(
            <>
                
                <div className="flex justify-center items-center pt-3">
                        <input onChange={(e)=>(setsearchedvalue(e.target.value))} className="shadow-lg w-90 border-2 border-orange-400 rounded-l-md" type="text" />
                        <FaSearch onClick={handleclick}  className="size-7 rounded-r-lg p-1 bg-[#ff9900] " />
                </div>
            </>
    )
}
export default SearchBar