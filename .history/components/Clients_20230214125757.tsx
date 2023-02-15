import React from 'react';
import Image from 'next/image';

const clients =[
    {
      image:'/images/logo-brown1.png', 
    },
    {
      image:'/images/logo-brown2.png',   
    },
    {
      image:'/images/logo-brown3.png',
    },
    {
      image:'/images/logo-brown9.png',
    },
    {
        image:'/images/logo-brown8.png',
    },
    {
     image:'/images/logo-brown6.png',
    },
  ]

const Clients = () => {
  return (
    <section className="bg-[url('/images/bg_pattern_6.jpg')] sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="max-w-xl mx-auto mt-4 text-4xl font-normal leading-relaxed text-yellow-400">
           OUR CLIENTS
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
          {clients.map((item, i) => (
         <div className="overflow-hidden border-gray-300 rounded-md">             
              <div className="p-8 xl:px-12 flex flex-col items-center justify-center">
                 <div>
                  <Image
                   src={item.image} 
                   className=" align-center"
                   height={60}
                   width={150}
                 />
                 </div>
                
              </div>                     
         </div>
         ))}
        </div>

    </div>
  </section>
  )
}

export default Clients