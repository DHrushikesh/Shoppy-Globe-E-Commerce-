import { configureStore } from "@reduxjs/toolkit"
import cartitems from "./cartslice"

const appStore = configureStore({
    reducer:{
        cart:cartitems,
    }
})

export default appStore
