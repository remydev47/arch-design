import React from 'react'

const reasons=[
  {
    title:"Expert Employee",
    description:'We are using the Handy platform have helped clean millions of homes and apartments in NYC, SF, Boston, Chicago, London, and beyond.'
  },
  {
    title:"Affordable Package",
    description:'We provide professional and affordable home cleaning services in Toronto. We charge flat rates for awesome cleaning. What you see is what you get.'
  },
  {
    title:"100% Satisfaction",
    description:'Queak Pro Cleaning takes pride in offering you peace of mind with a 100% Customer Satisfaction Guarantee for our professional cleaning service.'
  },
]

const AboutUs = () => {
  return (
    <section className="bg-gray-200 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto  items-center justify-center">
          <img src='/images/heading_icon.png' className='items-center justify-center' />
           <p className="max-w-xl mx-auto mt-4 text-[52px] font-semibold leading-relaxed text-blue-700">
             Expert Cleaning Service you Can Trust
           </p>
           <h2 className="text-xl font-bold leading-tight text-green-400 text-center">Special Features</h2>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
           {/* expert employees */}
            <div className="overflow-hidden bg-gray-100 border-2 border-gray-300 rounded-md hover:bg-green-500">
               <div className="p-8 xl:px-12 items-center justify-center">
                  <h2 className='text-center text-blue-900 text-2xl font-serif'>Expert Employee</h2>
                  <p className='text-center font-medium text-black text-[18px]'>
                   We are using the Handy platform have helped clean millions of homes and apartments in NYC, SF, Boston, Chicago, London, and beyond.
                  </p>
               </div>
            </div>
            {/* affordable packages */}
            <div className="overflow-hidden bg-gray-100 border-2 border-gray-300 rounded-md hover:bg-green-500">
               <div className="p-8 xl:px-12 items-center justify-center">
                  <h2 className='text-center text-blue-900 text-2xl font-serif'>Expert Employee</h2>
                  <p className='text-center font-medium text-black text-[18px]'>
                   We are using the Handy platform have helped clean millions of homes and apartments in NYC, SF, Boston, Chicago, London, and beyond.
                  </p>
               </div>
            </div>
            {/* 100% Satisfaction */}
            <div className="overflow-hidden bg-gray-100 border-2 border-gray-300 rounded-md hover:bg-green-500">
               <div className="p-8 xl:px-12 items-center justify-center">
                  <h2 className='text-center text-blue-900 text-2xl font-serif'>Expert Employee</h2>
                  <p className='text-center font-medium text-black text-[18px]'>
                   We are using the Handy platform have helped clean millions of homes and apartments in NYC, SF, Boston, Chicago, London, and beyond.
                  </p>
               </div>
            </div>

          
        </div>

      </div>
    </section>
  )
}

export default AboutUs