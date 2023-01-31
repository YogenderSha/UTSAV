import React from 'react';
import './Scroll.css'

export default function Scroll() {
  return (
    <>
    <section className=' flex h-[60vh] w-[95%] mx-auto my-2 border-2'>
        {/* <div className='flex flex-col rotate-90 m-6 w-0'><span className='flex'>heading-1</span></div> */}
        <main className='flex overflow-x-scroll justify-self-auto items-center my-2 box-border border-2 border-black  w-[80%] mx-auto bg-green-600'>
            <div className="min-w-[400PX] h-[50vh] rounded-md text-center bg-red-300 align-middle line-height mx-2">round box</div>
            <div className="min-w-[400PX] h-[50vh] rounded-md text-center bg-red-300 align-middle line-height mx-2">round box</div>
            <div className="min-w-[400PX] h-[50vh] rounded-md text-center bg-red-300 align-middle line-height mx-2">round box</div>
            <div className="min-w-[400PX] h-[50vh] rounded-md text-center bg-red-300 align-middle line-height mx-2">round box</div>
            <div className="min-w-[400PX] h-[50vh] rounded-md text-center bg-red-300 align-middle line-height mx-2">round box</div>
            <div className="min-w-[400PX] h-[50vh] rounded-md text-center bg-red-300 align-middle line-height mx-2">round box</div>
        </main>
        
    </section>

    <section className='flex flex-col w-[95%] mx-auto bg-gradient-to-t from-gray-700 my-4 border-2 border-green-400 box-border  to-gray-800  bg-red-900 md:h-[80vh]'>
          <div className=' inline mx-auto  md:block md:mx-10 my-3'>
            <span className='text-white font-sans py-1 font-semibold text-4xl hover-underline-animation hover-underline-animation:after '>Heading</span>\
          </div>

          <main className='flex flex-col md:flex-row w-[95%] mx-auto h-full '>
            <div className='flex flex-col md:mx-2  h-[40vh] md:h-[60vh] w-full my-2 py-2 border-2 rounded-md bg-gradient-to-b from-gray-800 to-gray-700'></div>
            <div className='flex flex-col md:mx-2  h-[40vh] md:h-[60vh] w-full my-2 py-2 border-2 rounded-md bg-gradient-to-b from-gray-800 to-gray-700'></div>
            <div className='flex flex-col md:mx-2  h-[40vh] md:h-[60vh] w-full my-2 py-2 border-2 rounded-md bg-gradient-to-b from-gray-800 to-gray-700'></div>
          </main>
         
        </section>
    </>
  )
}
