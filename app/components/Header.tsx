import Image from 'next/image'
import React from 'react'
import { CiLocationArrow1 } from 'react-icons/ci'

const Header = () => {


const links = <>
      <li>About Me</li>
      <li>Projects</li>
      <li>Education</li>
      <li>Certification</li>
</>


  // 
  return (
    <div className='bg-[#FFE9D9] text-[#080808] pl-12 relative'>
        {/* navbar */}
        <nav className='flex justify-between items-center gap-6 absolute left-1/2 font-syne border-b -translate-x-1/2 w-[92%] py-8 font-bold text-[1rem]'>
           <div>Logo</div>    
           {/* navigation */}
             <ul className='flex justify-center gap-6'>
               {links}
             </ul>
             {/*  */}
             <a href="" className='flex justify-center items-center gap-2'>
                 Let's Talk <CiLocationArrow1 />
             </a>
        </nav>


        {/* hero section */}
        <div className='flex justify-between items-start gap-8 font-syne'>
            {/* left side */}
            <div className='flex flex-col justify-start items-start w-[45%] m-auto pt-20'>
                {/* subtitle */}
                <p className='text-[2rem] font-bold mb-2 flex justify-start items-center gap-4'>
                    <span>
                       <svg xmlns="http://www.w3.org/2000/svg" width="65" height="2" viewBox="0 0 65 2" fill="none">
                         <path d="M0 1H65" stroke="#080808"></path>
                       </svg>
                   </span> Hello, I’m icon</p>
                 {/* heading */}
                 <h1 className='relative z-10 text-[7.5rem] font-bold leading-[92px] mb-4 content-p'>Mark <br/> Henry</h1>
                 {/* short desc */}
                 <p className='font-bold text-[1.6rem] text-[#080808cc] mb-6'>Product Designer | Based in Germany</p>
                 {/* call to action */}
                   <div className='flex justify-start items-center gap-5'>
                       <a href="#" className='flex justify-center items-center gap-3 bg-[#080808] border border-[#080808] font-bold px-8 py-4 rounded-lg text-[#aeaeae] hover:bg-[#08080800] hover:text-[#080808] transition-all duration-200'>
                          Let's Talk <CiLocationArrow1 />
                      </a>
                     {/*  */}
                      <a href='#' className='flex justify-center items-center gap-3 bg-[#08080800] font-bold px-8 py-4 rounded-lg text-[#080808] border border-[#080808] hover:bg-[#080808] hover:text-[#aeaeae] transition-all duration-200'>My Works <CiLocationArrow1 /></a>
                   </div>
            </div>
            {/* right side */}
            <div className='w-[55%] m-auto'>
                <Image className='w-full' src={'/img/hero.png'} alt='hero-img' width={600} height={400}></Image>
            </div>
           
        </div>

    </div>
  )
}

export default Header