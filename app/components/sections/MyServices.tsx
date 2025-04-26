import React from 'react'

const MyServices = () => {
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
         <div></div>
     </div>
  )
}

export default MyServices