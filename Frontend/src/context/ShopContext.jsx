import { createContext, use, useEffect, useState} from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const deliveryFee = 10;   
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setcartItems] = useState({})

    const addToCart = async (itemId, size)=>{
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]){
            if(!size){
                toast.error('Select Product Size')
                return;
            }

            if(cartData[itemId][size]){
                cartData[itemId][size] +=1;
            } else{
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setcartItems(cartData);
    }

    // useEffect(()=>{
    //     console.log(cartItems);
        
    // },[cartItems])

    const getCartCount = ()=>{
        let totalCount =0;
        for(const items in cartItems){
            for (const item in cartItems[item]){
                try{
                    if (cartItems[items][item] > 0){
                        totalCount += cartItems[items][item]
                    }
                } catch(error){

                }

            }}
        }
        return totalCount;

    }

    const value ={
        products, 
        currency, 
        deliveryFee, 
        showSearch,
        setShowSearch,
        search,
        setSearch,
        cartItems,
        addToCart
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider ;