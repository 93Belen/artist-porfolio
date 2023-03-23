"use client"


import { useSelector } from "react-redux"
import { selectCart } from "../../redux/selectors"


export default function Cart(){
    const cart = useSelector(selectCart);
    console.log(cart);
    let display;
    if(cart.length > 0){
        display = 'block'
    }
    else {
        display = 'none'
    }

    return (
    <div style={{animation: 'floating 3s ease-in-out infinite', display: `${display}` }} className="h-[50px] w-[50px] sticky rounded-full bg-orange-400 left-[90vw] top-[5vh] z-10">

    </div>
    )
}