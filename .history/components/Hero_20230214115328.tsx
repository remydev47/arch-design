import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
     <Image
      src="/images/p1.jpg"
      objectFit="cover" 
     layout="fill"
      />

  {/* <div className="absolute inset-0">
   <img className="object-cover w-full h-full" src="/images/bg_pattern_12.jpg" alt="" />
  </div> */}

<div className="relative">
   <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-6xl">
       <div className="w-full lg:w-2/3 xl:w-1/2">
           <h1 className="font-sans text-base font-bold tracking-tight text-white text-opacity-70">We create Your DREAM IDEAS</h1>
           <p className="mt-6 tracking-tighter text-black">
               <span className="font-sans font-normal text-5xl text-gray-50">We Create your Dream</span><br />
               <span className="font-serif italic font-normal text-6xl text-yellow-300">Ideas with Architectural Design</span>
           </p>
           <p className="mt-12 font-sans text-base font-bold text-black text-opacity-70"></p>
           <p className="mt-8 font-sans text-xl font-normal text-black">Contact Us</p>

           <div className="flex items-center mt-5 space-x-3 sm:space-x-4">
               <a
                   href="#"
                   title=""
                   className="
                       inline-flex
                       items-center
                       justify-center
                       px-5
                       py-2
                       font-sans
                       text-base
                       font-semibold
                       transition-all
                       duration-200
                       border-2 border-transparent
                       rounded-full
                       sm:leading-8
                       bg-yellow-400
                       sm:text-lg
                       text-white
                       hover:bg-opacity-90
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                   "
                   role="button"
               >
                   Get started
               </a>

               <a
                   href="#"
                   title=""
                   className="
                       inline-flex
                       items-center
                       justify-center
                       px-5
                       py-2
                       font-sans
                       text-base
                       font-semibold
                       transition-all
                       duration-200
                       bg-transparent
                       border-2
                       rounded-full
                       sm:leading-8
                       text-black
                       border-primary
                       hover:bg-black
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                       hover:text-white
                       sm:text-lg
                       focus:ring-offset-secondary
                   "
                   role="button"
               >
                   <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                       <path fill-rule="evenodd" clip-rule="evenodd" d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z" />
                   </svg>
                   Watch our Work
               </a>
           </div>
       </div>
   </div>
</div>
</div>
  )
}

export default Hero