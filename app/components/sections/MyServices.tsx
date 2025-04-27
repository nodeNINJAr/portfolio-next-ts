import React from 'react'

const MyServices = () => {
     

    // my services array
    const myServices = [
        {
          id: 1,
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          ),
          title: "FrontEnd Development"
        },
        {
          id: 2,
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 6v6h4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: "Mern Stack Development"
        },
        {
          id: 3,
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M3 5h18M9 3v2m6-2v2M4 8h16v12H4z" />
            </svg>
          ),
          title: "Full Stack Development"
        },
        {
          id: 4,
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M8 21h8M12 17v4m-6-8h12l-6-6z" />
            </svg>
          ),
          title: "Backend Development"
        },
        {
          id: 5,
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="#818181" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M3 7h18M5 7v10a1 1 0 001 1h12a1 1 0 001-1V7M8 11h8" />
            </svg>
          ),
          title: "Shopify Web Development"
        },
        {
          id: 6,
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="#818181" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 4v16m8-8H4" />
            </svg>
          ),
          title: "Pren Stack Development"
        }
      ];
      
    //
  return (
     <div>
        {/* top part */}
         <div className='grid grid-cols-1 md:grid-cols-2 gap-6 font-Roboto'>
            {/* inner left content */}
             <div>
                <p className='text-[#ff9330] font-Comic font-semibold text-2xl'>Services</p>
                 <h2 className='text-black font-Roboto text-[3.5em] leading-14'>My specialties</h2>
             </div>
             {/* inner right content */}
               <div>
                  <p className='text-[#08080899] leading-7'>Synergistically seize front-end methods of empowerment without <br/> extensive core competencies. Progressively repurpose alternative  <br/> platforms</p>
               </div>
         </div>
         {/* bottom part  */}
         <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-12'>
               <div className='col-span-3 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                  myServices.map(service=>(
                        <div className='cursor-pointer group bg-[#F5F5F5] col-span-1 p-5 rounded-lg space-y-6 hover:bg-white hover:drop-shadow-lg'>
                            <div className=' w-10 h-10 text-black bg-white p-2 rounded-full shadow-xs group-hover:bg-[#F5F5F5] transition-all ease-in duration-200'>{service?.icon}</div>
                            <div className='flex justify-baseline items-end gap-4'>
                               <h3 className='text-[#333333] text-[1rem] font-semibold group-hover:text-[#FF9330]'>{service?.title}</h3>
                               <span className='text-[#818181] group-hover:text-[#FF9330]'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 3h5v5"/><path d="m20 3l-7.536 7.536A5 5 0 0 0 11 14.07V21M4 5l4.5 4.5"/></g></svg></span>
                            </div>
                        </div>
                    ))
                }
               </div>
            {/*  */}
             <div className='relative col-span-1 lg:col-span-2 bg-[#080808] p-5 rounded-lg flex flex-col justify-end items-start'>
                 <span className='absolute right-3 top-5 text-end text-[#FF9330] w-12 h-12'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 3h5v5"/><path d="m20 3l-7.536 7.536A5 5 0 0 0 11 14.07V21M4 5l4.5 4.5"/></g></svg></span>
                  <div className=''>
                    <p className='text-sm text-[#FF9330]'>SAY HELLO!</p>
                    <h3 className='text-2xl font-semibold mb-4 tracking-wider'>hello@mehedi.com</h3>
                  </div>
             </div>
         </div>
     </div>
  )
}

export default MyServices