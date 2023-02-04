import React from 'react'
import logo from './search.svg';

export default function Hero() {
  return (
    <>
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 h-[70vh]  w-[95%] mx-auto box-border p-2">
      <main className="flex  flex-col align-middle border-gray-500 my-2 w-[95%] mx-auto items-center">
          <div className='my-6 lg:my-10'><h2 className='text-2xl lg:text-4xl font-sans font-bold text-white text-center'>Let us help to organize your events</h2></div>
          <div className='w-fit sm:w-2/3 box-border px-6 sm:px-0'><p className='text-white text-lg md:text-xl text-center font-sans font-medium sm:mx-4 md:mx-20 my-3'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempore nisi molestiae suscipit odit non dolorum ex at possimus esse. Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, recusandae. . Aspernatur, nihil.</p></div>
          <div className='flex flex-row space-x-2 shadow my-4  rounded-sm bg-white '>
            {/* <div className=' hidden md:flex'>
              <span><img src="" alt="" /></span>
              <span>date</span>
            </div> */}
            <div className='flex bg-white border-2 rounded-md'>
              <span className='h-6 flex lg:w-[50vh]'>
                <input className='px-2 lg:w-[50vh] py-2 focus:outline-none focus:placeholder:text-white lg:placeholder:text-xl' type="Search" placeholder='Search' id='search' />
              </span>
              
              <span className=' flex  cursor-pointer'>
                <img className='h-6 w-6' src={logo} alt="logo" />
              </span>
            </div>

          </div>
        
      </main>

    </section>
    
    </>
  )
}
