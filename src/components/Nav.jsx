import React from 'react'

const Nav = () => {
  return (
    <>
        <section className='text-[1.4vw] w-full grid grid-cols-2 text-xl py-[2vw] px-[3vw] nav_bg rounded-b-lg'>
            <div className=''>
                <span><i className="fa-solid fa-bars"></i></span>
            </div>

            <div className='flex justify-end gap-[4.5vw] mr-[2vw]'>
                <span>Home</span>
                <span>About us</span>
                <span>Help</span>
                <span>Contact</span>
            </div>
        </section>
    
    </>
  )
}

export default Nav