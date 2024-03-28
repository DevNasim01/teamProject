import React from 'react'

const End = () => {
  return (
    <>
        <section className='bg-[#624fa0] w-full flex flex-col items-center rounded-t-full'>
            <div className='bg-[#221143] text-[3rem]/[0rem] px-8 rounded-b-lg pb-3'><i className="fa-solid fa-chevron-down"></i></div>

            <div className='w-full flex justify-around text-xl font-semibold pb-10 px-5 mt-10'>
              <div className='w-full flex justify-center items-center flex-col'>
                <span className='h-20 w-20 flex items-center justify-center rounded-full border-2 text-2xl'><i className="fa-solid fa-eye"></i></span>
                <p>Recently Visited</p>
              </div>
              
              <div className='w-full flex justify-center items-center flex-col'>
                <span className='h-20 w-20 flex items-center justify-center rounded-full border-2 text-2xl'><i className="fa-solid fa-user"></i></span>
                <p>Account making date</p>
              </div>

              <div className='w-full flex justify-center items-center flex-col border-2 gap-4 py-6 px-5 text-center'>
                <div className='bg-white h-full w-full flex items-center justify-center px-10 text-black rounded-full'>Fake</div>
                <div className='bg-white h-full w-full flex items-center justify-center px-10 text-black rounded-full'>Actual but not varified</div>
              </div>

              <div className='w-full flex justify-center items-center flex-col'>
                <span className='h-20 w-20 flex items-center justify-center rounded-full border-2 text-2xl'><i className="fa-solid fa-mobile-screen"></i></span>
                <p>ScreenTime</p>
              </div>

              <div className='w-full flex justify-center items-center flex-col'>
                <span className='h-20 w-20 flex items-center justify-center rounded-full border-2 text-2xl'><i className="fa-solid fa-user-shield"></i></span>
                <p>Public or privet</p>
              </div>
            </div>
        </section>
    </>
  )
}

export default End