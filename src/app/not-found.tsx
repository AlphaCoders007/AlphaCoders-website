import React from 'react'

function NotFound() {
  return (
    <div className='relative w-full h-screen sm:h-[90vh] z-30 top-20 bg-background-light flex  flex-col  justify-center items-center '>
      <h1 className='  w-full text-center text-9xl sm:text-7xl flex justify-center items-center '>
        404
      </h1>
      <p className='text-5xl text-center'>
        You are at the wrong Place
      </p>
    </div>
  )
}

export default NotFound