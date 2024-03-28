import React from 'react'

const Nav = () => {
  return (
    <>
        <section className='w-full grid grid-cols-2 text-xl py-6 px-10 bg-[#4a3b81]'>
            <div className='text-2xl'>
                <span><i className="fa-solid fa-bars"></i></span>
            </div>

            <div className='flex justify-end gap-10 mr-12'>
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