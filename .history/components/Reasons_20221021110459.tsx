import React from 'react'

const Reasons = () => {
  return (
    <section>
    <div className="relative pt-12 bg-gray-50 sm:pt-16 lg:py-36 xl:py-48">
        <div className="absolute inset-0 hidden lg:block">
            <img className="object-cover object-right w-full h-full" src="/images/service2.jpg" alt="" />
        </div>
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-lg mx-auto text-center lg:mx-0 lg:max-w-md lg:text-left">
              <h2 className='text-2xl text-green-500 font-bold'>Why Choose Us</h2>
                <h1 className="mt-3 text-4xl font-bold text-blue-900 sm:mt-8 sm:text-5xl xl:text-7xl">
                 Our Expertise Making Your Business Shine
                </h1>
                <p className='text-xl text-black font-normal mt-2'>
                 At Queak we believe that we have a duty to adhere to good environmental practice, and operate in a sustainable manner. As lovers of plants and the environment it is only natural for us to want to reduce man’s impact wherever possible. Colin and the staff at Queak are committed to helping people make sustainable choices in their house.
                </p>

                <div className="mt-8 sm:mt-12">
                    <a
                        href="#"
                        title=""
                        className="
                            inline-flex
                            items-center
                            justify-center
                            px-8
                            py-3
                            text-base
                            font-bold
                            leading-7
                            text-black
                            transition-all
                            duration-200
                            bg-[#FFE942]
                            border border-transparent
                            rounded-md                           
                            hover:bg-gray-600   
                        "
                        role="button"
                    >
                        Read More
                    </a>
                </div>
            </div>

            <div className="mt-8 lg:hidden">
                <img className="w-full mx-auto" src="/images/reason.jpg" alt="" />
            </div>
        </div>
    </div>
</section>
  )
}

export default Reasons