import React from 'react'

const End = () => {
  return (
    <>
        <section className='end_bg w-full flex flex-col items-center rounded-t-full absolute bottom-0'>
            <div className='bg-arrow text-[1vw] px-[2.4vw] rounded-b-lg pb-3'><i className="fa-solid fa-chevron-down"></i></div>

            <div className='w-full flex justify-around text-xl font-semibold mt-[4vw] mb-[2vw] px-[2vw]'>
              <div className=' flex justify-center items-center flex-col'>
                <span className='h-[6vw] w-[6vw] flex items-center justify-center rounded-full bg-arrow text-[1.5vw]'><i className="fa-solid fa-eye"></i></span>
                <p className='text-[1.2vw]'>Recently Visited</p>
              </div>
              
              <div className=' flex justify-center items-center flex-col'>
                <span className='h-[6vw] w-[6vw] flex items-center justify-center rounded-full bg-arrow text-[1.5vw]'><i className="fa-solid fa-user"></i></span>
                <p className='text-[1.2vw]'>Account making date</p>
              </div>

              <div className=' bg-box flex justify-center items-center flex-col gap-4 py-[1.8vw] px-[2.5vw] text-center'>
                <div className='bg-text h-full w-full flex items-center justify-center px-[2.5vw] py-[0.2vw] text-[1.2vw] text-black'>Fake</div>
                <div className='bg-text h-full w-full flex items-center justify-center px-[2.5vw] py-[0.2vw] text-[1.2vw] text-black'>Actual but not varified</div>
              </div>

              <div className=' flex justify-center items-center flex-col'>
                <span className='h-[6vw] w-[6vw] flex items-center justify-center rounded-full bg-arrow text-[1.5vw]'><i className="fa-solid fa-mobile-screen"></i></span>
                <p className='text-[1.2vw]'>ScreenTime</p>
              </div>

              <div className=' flex justify-center items-center flex-col'>
                <span className='h-[6vw] w-[6vw] flex items-center justify-center rounded-full bg-arrow text-[1.5vw]'><i className="fa-solid fa-user-shield"></i></span>
                <p className='text-[1.2vw]'>Public or privet</p>
              </div>
            </div>
        </section>
    </>
  )
}

export default End