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

    const openModal = () => {
        document.getElementById('cart-modal').style.display = 'block'
        document.getElementById('cart-modal').style.animationName = 'appear-menu'
        document.getElementById('cart-modal').style.animationDuration = '1s'
        document.getElementById('cart-modal').style.transform = 'scale(1)';


        window.scrollTo(0, 0)
}

    return (
    <div onClick={openModal} style={{animation: 'floating 3s ease-in-out infinite', display: `${display}` }} className="h-[60px] w-[60px] sticky rounded-full bg-orange-400 left-[90vw] top-[5vh] z-10 p-1 cursor-pointer hover:bg-orange-300">
        <svg className='m-auto' width="30" height="47" viewBox="0 0 34 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 12.5H33.5V42C33.5 44.4853 31.4853 46.5 29 46.5H5C2.51472 46.5 0.5 44.4853 0.5 42V12.5Z" stroke="black"/>
            <path d="M26 19V10C26 5.02944 21.9706 1 17 1V1C12.0294 1 8 5.02944 8 10V19" stroke="black"/>
        </svg>
    </div>
    )
}