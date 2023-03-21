"use client"

import Image from "next/image"




export default function Modal(){

    const closeModal = () => {
            const hide = () => document.getElementById('modal').style.display = 'none'
            setTimeout(hide, 500)
            document.getElementById('modal').style.animationName = 'desappear-modal'
            document.getElementById('modal').style.animationDuration = '0.7s'
            document.getElementById('modal').style.transform = 'scale(1,0)'
            document.getElementById('modal').style.transformOrigin = 'top'
            document.getElementById('modal').style.transitionDuration = '1s'


    }

    return (
        <div id='modal' className='h-[100vh] w-screen absolute z-10  md:rounded-xl hidden box-border'>
            <div className='grid p-8 pb-10 h-fit sm:w-full md:grid-cols-2 md:grid-rows-[5%_40%_55%] gap-4 md:w-4/5 m-auto md:rounded-xl backdrop-blur-2xl'>
                <button onClick={closeModal} className='text-white md:col-start-2 md:self-start md:justify-self-end'><svg id='close-modal-svg' width="25" height="100%" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.5" y1="-1.5" x2="23.5" y2="-1.5" transform="matrix(-0.642788 0.766044 0.766044 0.642788 18.5348 2.42444)" stroke="#FB923C" stroke-width="3" stroke-linecap="round"/>
                    <line x1="17.4215" y1="19.3907" x2="3.28021" y2="2.5377" stroke="#FB923C" stroke-width="3" stroke-linecap="round"/>
                </svg>
</button>
                <div className='p-2 h-fit justify-items-center items-center col-start-1 col-span-2'><Image className='h-auto w-full md:w-auto md:h-64 m-auto rounded-md md:rotate-[-10deg]' src={require('../../imgs/one.jpg')} /></div>
                <div className='text-white p-4'>
                    <p className='text-3xl'>titulo</p>
                    <p className='text-3xl'>precio</p>
                    <p className='text-3xl'>id number</p>
                    <p className='text-3xl'>date</p>
                    <p className='text-3xl'>something else</p>
                </div>
                <div className='text-white md:col-span-2 md:p-10 md:pt-1 sm:p-4 h-fit w-auto'>
                    <p className='text-3xl'>ore veritatis et quasi architecto beatae vitae dicta sunt expli
                        cabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut o
                        dit aut fugit, sed quia consequuntur magni dolores eos qui ratione v
                        oluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsu
                        error sit voluptatem accusantium doloremque laud
                        ore veritatis et quasi architecto beatae vitae dicta sunt expli
                        cabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut o
                        dit aut fugit, sed quia consequuntur magni dolores eos qui ratione v
                        oluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsu
                        error sit voluptatem accusantium doloremque laud</p>
                </div>
            </div>
        </div>
    )
}