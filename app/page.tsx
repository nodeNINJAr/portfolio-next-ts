import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MyServices from './components/sections/MyServices'

const home = () => {
  return (
   <>
   {/* header */}
       <Header/>
        {/* main */}
          <main className='bg-[#ffffff]'>
              <section className='containe w-10/12 mx-auto py-28'><MyServices/></section>
          </main>
       {/* footer */}
       <Footer/>
   </>
  )
}

export default home