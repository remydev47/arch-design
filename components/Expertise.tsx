import React from 'react'

const Expertise = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
     <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
            <div className="">
                <h1 className='text-base text-black text-center font-bold'>About Architecture Studio.</h1>
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl">One Stop for all Construction Needs.</h2>
                {/*  */}
                <h2 className="text-4xl font-extrabold leading-tight text-black sm:text-4xl lg:text-4xl">
                  10+<br/> <span className='text-3xl font-bold text-white'>Years Experience</span>
                </h2>
                <p className=" text-xl leading-relaxed text-gray-400 font-normal">
                    We also provide many more like condos and apartment Construction. Our unique 4-Step Healthy Touch Consultant System will ensure you’ll receive an healthAffordable, thorough , Quotation with every visit. We’ll tackle mildew.
                </p>
            </div>

            <div className="p-[25%] pl-20 pr-6 sm:pl-6 md:px-0">
                <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
                    
                    <img className="relative -top-4 -left-12" src="/images/pic3.jpg" alt="" />

                    <div className="absolute -bottom-10 -left-16">
                        <div className="bg-yellow-400">
                            <div className="px-8 py-8">
                                <span className="block text-4xl font-bold text-black lg:text-5xl"> 12+ </span>
                                <span className="block mt-2 text-base leading-tight text-black"> Years of <br />Experience </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Expertise