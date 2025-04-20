import React, { createContext, useEffect, useState } from 'react';


//calling the create context and exporting it so it can be used everywhere
export const CartContext = createContext()

export function CartProvider({children}) {

    //a function to load the cart or saved items from the local storage
    // const savedCart =()=>{
    //  const cars =localStorage.getItem("cars");
    //  return cars ? JSON.parse(cars) : [];
    // };

    const savedCart = () => {
        const cars = localStorage.getItem("cars");
        try {
          const parsed = cars ? JSON.parse(cars) : [];
          // Filter out any null, undefined, or invalid items
          return Array.isArray(parsed)
            ? parsed.filter((item) => item && item.name)
            : [];
        } catch (error) {
          console.error("Failed to parse saved cart:", error);
          return [];
        }
      };
    //passed the function to the use state
    const [cart, setCart] = useState(savedCart);

    //save cart to local storage and depend on the cart when it changes or renders
    useEffect(()=>{
        const miniCart = cart.map((id)=>(id));
        localStorage.setItem('cars',JSON.stringify(miniCart));
    },[cart]);

    const addToCart = (product) => {
        if (!product || !product.name) {
            console.error("Invalid product:", product);
            return;
        }
        setCart(
            //what ever is in the  cart
            (prevCart) =>{ 
                //find method returns a truth value its looking if the item is in the cart
                const IsItemInCart = prevCart.find((item)=>item.name === product.name);
                if(IsItemInCart){
                    //if its in d cart map through it create an object quantity and add it up else the item
                   return prevCart.map((item)=>item.name ===product.name ? {...item, quantity:item.quantity +1}: item)
                } else{
                    return [...prevCart, {...product, quantity:1}];
                }   
            }
        )

    
    };

    const removeFromCart =(product)=>{
        setCart((prevCart)=>prevCart.filter((item)=>item.id !==product.id))
    }

    const updateCart =( product ,quantity)=>{
        setCart((prevCart)=>{
            const cart = [...prevCart];
            const index = cart.findIndex((item)=>item.id ===product.id)

            if (index  !== -1) {
                if (quantity <=0) {
                    cart.splice(index,1)
                    
                }else{
                    cart[index]  ={...cart[index],quantity}  

                }
            }
            return cart
        });
    };



    return(
    // cartContext.provider is providing any value you want to pass down 
        <CartContext.Provider value={{cart,addToCart,removeFromCart,updateCart}}>
            {/* children is a react word for whatever component thats wrapped inside the cartcontext.provider  */}
             {children}
        </CartContext.Provider>
    );   
}