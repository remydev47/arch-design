import React from 'react'

const services =[
  {
    image:'/images/bulldozer.png',
    title:'Excavation & Extraction',
    description:"Our Construction Services include use of modern Machinery…"
  },
  {
    image:'/images/engineering.png',
    title:'Construction',
    description:"Imagine Seeing your house from a Paper to material residence from Compitent engineers"
  },
  {
    image:'/images/engineers.png',
    title:'Architecture',
    description:"Busy schedules make it difficult to find time to find a compitent Architect…"
  },
  {
    image:'/images/interior.png',
    title:'Interior Design',
    description:"We provide full interior designing services from highly trained  creatives…"
  },
]

const Services = () => {
  return (
    <section className="bg-gray-200 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-bold leading-tight text-green-600  lg:text-5xl">...our services...</h2>
          <p className="max-w-xl mx-auto mt-4 text-4xl font-extrabold leading-relaxed text-blue-700">
           WHAT WE PROVIDE
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
          {services.map((item, i) => (
         <div className="overflow-hidden bg-yellow-400  border-gray-300 rounded-md">             
              <div className="p-8 xl:px-12 flex flex-col items-center justify-center">
                 <div>
                  <img
                   src={item.image} 
                   className="h-1/2 w-1/2 align-center"
                 />
                 </div>
                 <h2 className='font-bold text-3xl text-white text-center mt-2'>
                   {item.title}
                 </h2>
                 <p className='text-xl text-white text-center '>
                  {item.description}
                 </p>
              </div>                     
         </div>
         ))}
        </div>

    </div>
  </section>
  )
}

export default Services