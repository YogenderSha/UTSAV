import React  from "react";
import logo from "./search.svg";
import './Navbar.css';

export default function Navbar() {
    
return (
    <>
        <header className="w-full flex fixed top-0">
            <nav className="flex flex-col md:flex-row justify-center align-middle w-full h-full">
                <div className="flex flex-row align-middle justify-center w-[95%] mx-auto my-2 rounded-sm bg-gradient-to-b from-gray-800 to-gray-700 ">
                    <div className="mx-2 my-2 w-full md:w-1/2 lg:w-3/4 "><span className=""><a className="text-white font-serif font-bold text-2xl lg:mx-6 " href="/home">UTSAV</a></span></div>
                    <div className="mx-2 my-2 flex md:hidden">
                        <span className=""><img className="rounded-md border-2 border-gray-700 hover:border-2 hover:border-gray-600 duration- hover:cursor-pointer " src="https://img.icons8.com/external-jumpicon-line-ayub-irawan/32/null/external-hamburger-basic-ui-jumpicon-line-jumpicon-line-ayub-irawan.png" alt="logo"/></span>
                    </div>
                    <div className="hidden mx-2 my-2 md:flex md:w-[60%] lg:w-[80%] justify-start">
                        <div className="hidden md:flex flex-row  w-[40%]  rounded-md ">
                            <li className="list-none text-lg  font-sans font-semibold  px-4  md:my-0 my-2 rounded-md py-1"><a className=" hover-underline-animation hover-underline-animation:after text-white" href="/">Home</a></li>
                            <li className="list-none text-lg  font-sans font-semibold  px-4  md:my-0 my-2 rounded-md py-1"><a className=" hover-underline-animation hover-underline-animation:after text-white" href="/">About</a></li>
                            <li className="list-none text-lg  font-sans font-semibold  px-4  md:my-0 my-2 rounded-md py-1"><a className=" hover-underline-animation hover-underline-animation:after text-white" href="/">Services</a></li>
                        </div>
                    </div>

                    <div className="mx-2 my-2 hidden md:flex  md:w-[50%] md:justify-end">
                        
                            <div className="box-border mt-2 hover:cursor-pointer hidden">
                                <span><img className="h-6" src={logo} alt="" /></span>
                            </div>

                            <div className=" flex justify-end m-auto md:mx-0 lg:mx-auto md:w-[80%]">
                                <div className="flex space-x-2 justify-end">
                                    <span className="px-2 rounded-md"><a className="text-lg text-white hover-underline-animation hover-underline-animation:after font-sans font-medium" href="/">SignIn</a></span>
                                    <span className="px-2 rounded-md"><a className="text-lg text-white hover-underline-animation hover-underline-animation:after font-sans font-medium" href="/">SignUp</a></span>
                                </div>
                            </div>
            
                    </div>
                </div>


                <div className="hidden navigation flex-col w-[95%]  rounded-md m-auto  bg-gray-600">
                    <div className="flex m-auto">
                        <div className="flex mx-auto my-2 md:flex md:flex-row flex-col w-[90%] rounded-md justify-center">
                            <li className="list-none text-xl font-sans font-semibold  px-4  my-2 rounded-md py-1"><a className=" hover-underline-animation hover-underline-animation:after text-white" href="/">Home</a></li>
                            <li className="list-none text-xl font-sans font-semibold  px-4  my-2 rounded-md py-1"><a className=" hover-underline-animation hover-underline-animation:after text-white" href="/">About</a></li>
                            <li className="list-none text-xl font-sans font-semibold  px-4  my-2 rounded-md py-1"><a className=" hover-underline-animation hover-underline-animation:after text-white" href="/">Services</a></li>
                        </div>
                    </div>
                </div>
            </nav>
            
        </header>
    </>
  );
}
