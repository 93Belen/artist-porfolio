"use client"

import { useSelector } from "react-redux"
import { selectCart, selectItems } from "../../redux/selectors"



export default function CartModal(){
    const cart = useSelector(selectCart);
    const items = useSelector(selectItems);
    
    const displayItems = () => {
        for(const id of cart){
            return (
                <div>
                    <p>{items[id].name}</p>
                </div>
            )
        }
    }



    const closeModal = () => {
            const hide = () => document.getElementById('modal').style.display = 'none'
            setTimeout(hide, 500)
            document.getElementById('cart-modal').style.animationName = 'desappear-modal'
            document.getElementById('cart-modal').style.animationDuration = '0.7s'
            document.getElementById('cart-modal').style.transform = 'scale(1,0)'
            document.getElementById('cart-modal').style.transformOrigin = 'top'
            document.getElementById('cart-modal').style.transitionDuration = '1s'


    }

    return (
        <div id='cart-modal' className='h-[100vh] w-screen absolute z-10  md:rounded-xl hidden box-border'>
            <div className='grid p-8 pb-10 h-fit sm:w-full grid-cols-1 md:grid-cols-2 md:grid-rows-[5%_40%_55%] gap-4 md:w-4/5 m-auto md:rounded-xl backdrop-blur-2xl'>
                <button id='closing-modal-button' onClick={closeModal} className='text-white md:col-start-2 md:self-start md:justify-self-end row-start-1 md:hover:rotate-[360deg] md:active:rotate-[360deg] duration-700'><svg id='close-modal-svg' width="25" height="100%" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.5" y1="-1.5" x2="23.5" y2="-1.5" transform="matrix(-0.642788 0.766044 0.766044 0.642788 18.5348 2.42444)" stroke="#FB923C" stroke-width="3" stroke-linecap="round"/>
                    <line x1="17.4215" y1="19.3907" x2="3.28021" y2="2.5377" stroke="#FB923C" stroke-width="3" stroke-linecap="round"/>
                </svg>
</button>
                <div>
                    {displayItems()}
                </div>
            </div>
        </div>
    )
}