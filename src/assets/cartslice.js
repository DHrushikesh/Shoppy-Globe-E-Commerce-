import { createSlice } from "@reduxjs/toolkit";

export const cartslice = createSlice({
    name:"Cart",
    initialState:{
        cartitems : []
    },
    reducers:{
        Addtocart:(state,action)=>{
            state.cartitems.push(action.payload)
            const lastIndex = state.cartitems.length - 1;
            state.cartitems[lastIndex].quantity = 1;
        },
        modifyQuantity:(state,action)=>{
            const { itemid, operation , amount } = action.payload;
            const itemIndex = state.cartitems.findIndex((products)=>(products.id===itemid))

            if(operation==="increase"){
                state.cartitems[itemIndex].quantity ++
            }
            else if(operation==="decrease" && state.cartitems[itemIndex].quantity > 1){
                state.cartitems[itemIndex].quantity --
            }
            else if(operation==="custom"){
                state.cartitems[itemIndex].quantity = amount
            }
            else(
                state.cartitems.splice(itemIndex,1)
            )

        }
    }
})

export const { Addtocart , modifyQuantity } = cartslice.actions;
export default cartslice.reducer