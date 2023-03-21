"use client"

import Image from "next/image"




export default function Modal(){

    const closeModal = () => {
            const hide = () => document.getElementById('modal').style.display = 'none'
            setTimeout(hide, 1000)
            document.getElementById('modal').style.animationName = 'desappear-menu'
            document.getElementById('modal').style.animationDuration = '1s'
            document.getElementById('modal').style.transform = 'scale(0)'
            document.getElementById('modal').style.transitionDuration = '0.5s'
    }

    return (
        <div id='modal' className='h-[80vh] w-screen absolute top-[500px] z-10 opacity-0  md:rounded-xl hidden'>
            <div className='grid p-8 bg-white min-h-fit sm:w-full md:grid-cols-2 md:grid-rows-[5%_60%_35%] gap-4 md:w-4/5 m-auto md:rounded-xl'>
                <button onClick={closeModal} className='text-black md:col-start-2 md:self-start md:justify-self-end md:hover:rotate-180'>X</button>
                <div className='p-2 h-fit justify-items-center items-center'><Image className='h-auto w-full md:w-auto md:h-64 m-auto rounded-md md:rotate-[-10deg]' src={require('../../imgs/one.jpg')} /></div>
                <div className='text-black p-4'>
                    <p>titulo</p>
                    <p>precio</p>
                    <p>id number</p>
                    <p>date</p>
                    <p>something else</p>
                </div>
                <div className='text-black md:col-span-2 p-12 sm:p-4 w-auto'>
                    <p>ore veritatis et quasi architecto beatae vitae dicta sunt expli
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