import React from 'react'

export default function Card() {
  return (
    <div className='flex'>
  <div className='flex flex-col items-center gap-4 p-6 border-2 rounded-2xl shadow-lg bg-color-white dark:bg-yellow-100 w-full max-w-sm mx-auto mt-6 hover:bg-blue-500 transition-all duration-500 active:bg-amber-700'>

    <img className="object-cover w-32" 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrhaG2AttXH93ENiDs7yJPU6gzSLBHlkQ0QA&s" alt="Sample Image" className="w-72 h-72 rounded-lg border-4 border-red-500"/>
    <h2 className='text-lg font-bold'>Card Title</h2>
    <p className='text-blue-600 dark:text-red-400'>This is Just a sample Text , CLICK ON BUY NOW to BUY IT</p>
    <button className='bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 hover:border-8'>BUY NOW </button>
  </div>
    </div>
  )
}
