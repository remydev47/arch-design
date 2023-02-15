import React from 'react'

const AboutUs = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
       <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto  items-center justify-center">
          <img src='/images/heading_icon.png' className='items-center justify-center' />
           <p className="max-w-xl mx-auto mt-4 text-[52px] font-semibold leading-relaxed text-blue-700">
             Expert Cleaning Service you Can Trust
           </p>
           <h2 className="text-xl font-bold leading-tight text-green-400 text-center">Special Feature</h2>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
        <div className="overflow-hidden bg-gray-100 border-2 border-gray-300 rounded-md hover:bg-green-500">
            <div className="p-8 xl:px-12 flex flex-col items-center justify-center">
                        <svg className="flex-shrink-0 w-12 h-12 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1"
                                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                            />
                        </svg>
                        <div>
                          <h4 className="text-4xl font-bold text-blue-900">100% Satisfaction</h4>
                          <p className='font-normal text-2xl text-black'>
                           We are using the Handy platform have helped clean millions of homes and apartments in NYC, SF, Boston, Chicago, London, and beyond
                          </p>
                        </div>

            </div>
        </div>
        </div>

      </div>
    </section>
  )
}

export default AboutUs