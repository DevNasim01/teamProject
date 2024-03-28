import React from 'react'
import End from './End'

const Bg = () => {
  return (
    <>
        <section className='w-full bg flex flex-col items-center'>
            <div className='text-4xl mt-5 border-b-2 w-full text-center py-10'>Fake Account Detector</div>
            <div className='bg-[#1c0e3a] border-2 mb-20 text-4xl py-2 px-6 relative -top-7'><i className="fa-solid fa-envelope"></i></div>

            <form action="" className='w-full flex flex-col items-center pb-14 '>
                <label htmlFor="Search" className='w-2/4'>
                    <span className='text-sm py-1 ml-8 relative top-2 bg-[#412f7e] z-20 px-3 rounded-sm'>Past the link of your profile</span>
                    <input type="text" id='Search' className='w-full py-3 px-4 font-semibold bg-transparent border-2 rounded-md pl-20' placeholder='link'/>
                    <span className='relative -top-10 left-4 font-light text-lg'>https//:</span>
                </label>
            </form>

            <End />
        </section>
    </>
  )
}

export default Bg