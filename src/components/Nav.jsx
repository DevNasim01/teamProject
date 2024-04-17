import React from 'react'

const Nav = () => {
  return (
    <>
        <section className='text-[1.4vw] w-full grid grid-cols-2 text-xl py-[2vw] px-[3vw] nav_bg rounded-b-lg'>
            <div className=''>
                <span className='cursor-pointer'><i className="fa-solid fa-bars"></i></span>
            </div>

            <div className='flex justify-end gap-[4.5vw] mr-[2vw]'>
                <span className='cursor-pointer'>Home</span>
                <span className='cursor-pointer'>About us</span>
                <span className='cursor-pointer'>Help</span>
                <span className='cursor-pointer'>Contact</span>
            </div>
        </section>
    
    </>
  )
}

export default Nav