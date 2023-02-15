import React from 'react'

const Team = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Meet the brains</h2>
            <p className="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">CREATIVE EXPERTISE</p>
        </div>

        <div className="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-9 gap-x-0">
            <div>
                <img className="object-cover mx-auto rounded-lg w-28 h-28" src="/images/f1.jpg" alt="" />
                <p className="mt-8 text-lg font-semibold leading-tight text-black">Jenny Wilson</p>
                <p className="mt-1 text-base leading-tight text-gray-600">Founder</p>
            </div>

            <div className="hidden lg:block"></div>

            <div>
                <img className="object-cover mx-auto rounded-lg w-28 h-28" src="/images/f2.jpg" alt="" />
                <p className="mt-8 text-lg font-semibold leading-tight text-black">Darrell Steward</p>
                <p className="mt-1 text-base leading-tight text-gray-600">Developer</p>
            </div>

            <div className="hidden lg:block"></div>

            <div>
                <img className="object-cover mx-auto rounded-lg w-28 h-28" src="/images/f3.jpg" alt="" />
                <p className="mt-8 text-lg font-semibold leading-tight text-black">Bessie Cooper</p>
                <p className="mt-1 text-base leading-tight text-gray-600">CAD Engineer</p>
            </div>

            <div className="hidden lg:block"></div>

            <div>
                <img className="object-cover mx-auto rounded-lg w-28 h-28" src="/images/f4.jpg" alt="" />
                <p className="mt-8 text-lg font-semibold leading-tight text-black">Arlene McCoy</p>
                <p className="mt-1 text-base leading-tight text-gray-600">Civil Engineer</p>
            </div>

            <div className="hidden lg:block"></div>

           

            <div className="hidden lg:block"></div>


            <div className="hidden lg:block"></div>

           
        </div>
    </div>
</section>
  )
}

export default Team