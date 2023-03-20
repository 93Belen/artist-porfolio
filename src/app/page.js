import Image from "next/image";

export default function Home() {
  return (
    <div className='grid gap-9 md:grid-cols-3 md:grid-rows-2 p-7 justify-items-center'>
      <Image className='h-96 max-w-full md:w-auto md:h-64' src={require('../../imgs/one.jpg')} />
      <Image className='h-96 max-w-full md:w-auto md:h-64' src={require('../../imgs/two.jpg')} />
      <Image className='h-96 max-w-full md:w-auto md:h-64' src={require('../../imgs/three.jpg')} />

      <Image className='h-96 max-w-full md:w-auto md:h-64' src={require('../../imgs/four.jpg')} />
      <Image className='h-96 max-w-full md:w-auto md:h-64' src={require('../../imgs/five.jpg')} />
      <Image className='h-96 max-w-full md:w-auto md:h-64' src={require('../../imgs/six.jpg')} />      
    </div>
  )
}
