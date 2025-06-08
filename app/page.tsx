import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MyServices from './components/sections/MyServices'

const home = () => {
  return (
   <>
   {/* header */}
        <header><Header/></header>
        {/* main */}
          <main className='bg-[#ffffff]'>
            {/* my services */}
              <section className='container w-10/12 mx-auto py-28 font-Helvetica'><MyServices/></section>
              {/*  */}
          </main>
       {/* footer */}
       <Footer/>
   </>
  )
}

export default home