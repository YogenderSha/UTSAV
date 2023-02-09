import React from 'react';
import './Scroll.css';
import logo from './hero.jpg';

export default function Scroll() {
  return (
    <>
    <section className=' flex h-[60vh] w-[95%] mx-auto my-2 bg-gradient-to-t from-gray-900 to-gray-800'>
        {/* <div className='flex flex-col rotate-90 m-6 w-0'><span className='flex'>heading-1</span></div> */}
        <main className='flex overflow-x-auto justify-self-auto items-center my-2 box-border border-2 border-black  w-[100%] mx-auto bg-green-600'>
            <div className="min-w-[300PX] h-[50vh] rounded-md text-center bg-red-300 align-middle line-height mx-2">round box</div>
            <div className="min-w-[300PX] h-[50vh] rounded-md text-center bg-red-300 align-middle line-height mx-2">round box</div>
            <div className="min-w-[300PX] h-[50vh] rounded-md text-center bg-red-300 align-middle line-height mx-2">round box</div>
            <div className="min-w-[300PX] h-[50vh] rounded-md text-center bg-red-300 align-middle line-height mx-2">round box</div>
            <div className="min-w-[300PX] h-[50vh] rounded-md text-center bg-red-300 align-middle line-height mx-2">round box</div>
            <div className="min-w-[300PX] h-[50vh] rounded-md text-center bg-red-300 align-middle line-height mx-2">round box</div>
        </main>
        
    </section>

    <section className='flex flex-col w-[95%] mx-auto bg-gradient-to-t from-gray-700 to-gray-800 my-4 md:h-[80vh]'>
          <div className=' inline mx-auto  md:block md:mx-10 my-3'>
            <span className='text-white font-sans py-1 font-semibold text-4xl'>Heading</span>
          </div>

          <main className='flex flex-col md:flex-row w-[95%] mx-auto h-full'>
            <div className='flex flex-col md:mx-2  h-[50vh] sm:h-[65vh]   w-full my-2 rounded-md bg-gradient-to-b from-gray-900 to-gray-800'>
              <div className='flex flex-col'>
                <span className=''><img className='mx-auto my-4 rounded-md md:w-5/6 w-72 sm:w-3/4 ' src={logo} alt="" /></span>
                <div className='grid grid-rows-4 grid-flow-col gap-4 w-[85%] sm:w-[75%] md:w-[80%] lg:w-[85%] rounded-md mx-auto h-[25vh]'>
                  <span className='text-white bg-gray-600 rounded-md text-center m-auto w-full font-serif hover:text-gray-400 focus:border-[1px] focus:border-green-200'>full package order</span>
                  <span className='text-white bg-gray-600 rounded-md text-center m-auto w-full font-serif hover:text-gray-400 focus:border-[1px] focus:border-green-200'>rating</span>
                  <span className='text-white bg-gray-600 rounded-md text-center m-auto w-full font-serif hover:text-gray-400 focus:border-[1px] focus:border-green-200'>availability</span>
                  <span className='text-white bg-gray-600 rounded-md text-center m-auto w-full font-serif hover:text-gray-400 focus:border-[1px] focus:border-green-200'>contact details</span>
                  

                </div>

              </div>
            </div>
            <div className='flex flex-col md:mx-2  h-[50vh] sm:h-[65vh]   w-full my-2 rounded-md bg-gradient-to-b from-gray-900 to-gray-800'>
              <div className='flex flex-col'>
                <span className=''><img className='mx-auto my-4 rounded-md md:w-5/6 w-72 sm:w-3/4 ' src={logo} alt="" /></span>
                <div className='grid grid-rows-4 grid-flow-col gap-4 w-[85%] sm:w-[75%] md:w-[80%] lg:w-[85%] rounded-md mx-auto h-[25vh]'>
                  <span className='text-white bg-gray-600 rounded-md text-center m-auto w-full font-serif hover:text-gray-400 focus:border-[1px] focus:border-green-200'>full package order</span>
                  <span className='text-white bg-gray-600 rounded-md text-center m-auto w-full font-serif hover:text-gray-400 focus:border-[1px] focus:border-green-200'>rating</span>
                  <span className='text-white bg-gray-600 rounded-md text-center m-auto w-full font-serif hover:text-gray-400 focus:border-[1px] focus:border-green-200'>availability</span>
                  <span className='text-white bg-gray-600 rounded-md text-center m-auto w-full font-serif hover:text-gray-400 focus:border-[1px] focus:border-green-200'>contact details</span>
                  

                </div>

              </div>
            </div>
            <div className='flex flex-col md:mx-2  h-[50vh] sm:h-[65vh]   w-full my-2 rounded-md bg-gradient-to-b from-gray-900 to-gray-800'>
              <div className='flex flex-col'>
                <span className=''><img className='mx-auto my-4 rounded-md md:w-5/6 w-72 sm:w-3/4 ' src={logo} alt="" /></span>
                <div className='grid grid-rows-4 grid-flow-col gap-4 w-[85%] sm:w-[75%] md:w-[80%] lg:w-[85%] rounded-md mx-auto h-[25vh]'>
                  <span className='text-white bg-gray-600 rounded-md text-center m-auto w-full font-serif hover:text-gray-400 focus:border-[1px] focus:border-green-200'>full package order</span>
                  <span className='text-white bg-gray-600 rounded-md text-center m-auto w-full font-serif hover:text-gray-400 focus:border-[1px] focus:border-green-200'>rating</span>
                  <span className='text-white bg-gray-600 rounded-md text-center m-auto w-full font-serif hover:text-gray-400 focus:border-[1px] focus:border-green-200'>availability</span>
                  <span className='text-white bg-gray-600 rounded-md text-center m-auto w-full font-serif hover:text-gray-400 focus:border-[1px] focus:border-green-200'>contact details</span>
                  

                </div>

              </div>
            </div>
          </main>
         
        </section>
    </>
  )
}
