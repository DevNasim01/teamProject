import React from 'react'
import End from './End'

const Bg = () => {
  return (
    <>
        <section className='h-full flex flex-col items-center relative'>
          
            <div className='text-[2.8vw] mt-[1vw] border-b-2 w-full font-bold text-center py-[4vw]'>Fake Account Detector</div>
            <div className='msg_bg rounded-sm text-[2.4vw] py-[0.5vw] px-[2vw] relative -top-[2.6vw]'><i className="fa-solid fa-envelope"></i></div>

            <form action="" className='w-full flex flex-col items-center '>
                <label htmlFor="Search" className='w-2/4'>
                    <span className='text-[0.8vw] py-1 ml-8 relative top-2 bg-[#412f7e] z-20 px-[0.7vw] rounded-sm'>Past the link of your profile</span>
                    <div className='relative'>
                    <input type="text" id='Search' className='w-full h-full py-[1vw] px-[1.2vw] font-semibold text-[1.3vw] bg-transparent border search-bg transition-all duration-1000 rounded-md pl-[5.8vw]' placeholder='link'/>
                    <span className='absolute top-0 w-full py-[1vw] px-[1.2vw] h-full left-1 font-light text-[1.3vw] flex items-center'>https//:</span>
                    </div>
                </label>
            </form>
          
            
            <End />
          
            
        </section>
    </>
  )
}

export default Bg