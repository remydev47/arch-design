import React from 'react'

const AboutUs = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
       <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <img src='/images/heading_icon.png' className='ml-40' />
           <p className="max-w-xl mx-auto mt-4 text-[52px] font-semibold leading-relaxed text-blue-700">
             Expert Cleaning Service you Can Trust
           </p>
           <h2 className="text-xl font-bold leading-tight text-green-400">Special Feature</h2>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
        <div className="overflow-hidden bg-gray-100 border-2 border-gray-300 rounded-md hover:bg-green-500">
          
        </div>
        </div>

      </div>
    </section>
  )
}

export default AboutUs