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
                <svg className="flex-shrink-0  w-12 h-12 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512.003 512.003" stroke="currentColor">
                  <path d="M512.003,166.465c0.017-2.287-0.887-4.48-2.5-6.093l-68.267-68.267c-3.319-3.319-8.678-3.337-12.023-0.043l-88.542,87.211    l-35.968-35.968c-1.604-1.604-3.772-2.5-6.033-2.5H153.603c-4.71,0-8.533,3.823-8.533,8.533v38.067    c-16.06,2.714-26.146,3.345-34.287-3.746c-7.219-6.281-9.216-13.867-12.527-26.436c-1.877-7.117-4.002-15.181-7.586-24.764    c-9.805-26.214-46.319-70.255-76.1-100.087c-3.328-3.337-8.721-3.345-12.066-0.009c-3.336,3.328-3.336,8.73-0.008,12.066    c34.313,34.364,64.674,73.907,72.192,94.012c3.285,8.781,5.291,16.401,7.066,23.134c3.567,13.534,6.647,25.225,17.818,34.953    c8.636,7.518,18.159,9.856,28.262,9.856c5.581,0,11.349-0.734,17.237-1.69v98.244c0,2.185,0.845,4.292,2.347,5.879L309.55,479.484    c1.673,1.766,3.925,2.654,6.187,2.654c2.108,0,4.215-0.768,5.862-2.33l153.6-145.067c1.673-1.587,2.645-3.78,2.671-6.084    c0.026-2.304-0.87-4.523-2.5-6.153l-59.196-59.196l93.252-90.795C511.056,170.928,511.986,168.743,512.003,166.465z     M457.091,328.359l-141.03,133.197L162.137,299.533v-97.741c5.385-0.862,10.906-1.468,16.555-1.758    c-0.503,2.099-0.845,4.25-0.845,6.502c0,15.334,12.476,27.819,27.819,27.819s27.81-12.476,27.81-27.819    c0-15.343-12.476-27.819-27.81-27.819c-5.478,0-10.564,1.647-14.874,4.395c-10.206-0.631-19.789,0.102-28.646,1.434v-26.675    h133.001l33.382,33.382L293.9,225.362c-1.169,1.152-1.988,2.62-2.338,4.233l-19.285,86.767c-0.631,2.842,0.23,5.82,2.295,7.885    c1.613,1.613,3.797,2.5,6.033,2.5c0.614,0,1.237-0.068,1.852-0.205l86.767-19.285c1.544-0.341,2.97-1.109,4.104-2.219    l30.635-29.824L457.091,328.359z M194.905,206.537c0-5.931,4.821-10.752,10.752-10.752c5.922,0,10.744,4.821,10.744,10.752    s-4.821,10.752-10.744,10.752C199.726,217.289,194.905,212.468,194.905,206.537z M304.029,252.097l42.684,42.684l-40.047,8.9    c-0.265-0.375-11.162-11.273-11.537-11.537L304.029,252.097z M365.196,289.131l-55.441-55.441l86.716-85.419l55.945,55.945    L365.196,289.131z M464.635,192.304l-56.013-56.013l26.53-26.138l56.166,56.166L464.635,192.304z"></path>
                </svg>
                  <h2 className='text-center text-blue-900 text-2xl font-serif'>Affordable Package</h2>
                  <p className='text-center font-medium text-black text-[18px]'>
                   We provide professional and affordable home cleaning services in Toronto. We charge flat rates for awesome cleaning. What you see is what you get.
                  </p>
               </div>
            </div>
            {/* 100% Satisfaction */}
           
            <div className="overflow-hidden bg-gray-100 border-2 border-gray-300 rounded-md hover:bg-green-500">
               <div className="p-8 xl:px-12 flex flex-col items-center justify-center">
                 <svg className="flex-shrink-0  w-12 h-12 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
                 </svg>
                  <h2 className='text-center text-blue-900 text-2xl font-serif'>100% Satisfaction</h2>
                  <p className='text-center font-medium text-black text-[18px]'>
                  Queak Pro Cleaning takes pride in offering you peace of mind with a 100% Customer Satisfaction Guarantee for our professional cleaning service.
                  </p>
               </div>
            </div>
          
        </div>

      </div>
    </section>
  )
}

export default AboutUs