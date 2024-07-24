import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
  id: string;
  title: string;
  img: string;
  price: number;
  quantity: number;
}

const initalState: Array<IProduct> = [];
export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addToCart: (state:IProduct[], action: PayloadAction<IProduct>) => {
        if(state.findIndex((pro:IProduct)=>pro.id===action.payload.id)===-1){
            state.push(action.payload);
        }
        else{
            return state.map((item:IProduct)=>{
                return item.id===action.payload.id?{...item,quantity:item.quantity+1}:item
            })
        }
    },
    removeFromCart:(state:IProduct[],action:PayloadAction<string>)=>{
        const id=action.payload;
         return state.filter((item:IProduct)=>item.id!=id)
    }
  },
});
export const {addToCart,removeFromCart}=cartSlice.actions
export default cartSlice.reducer
