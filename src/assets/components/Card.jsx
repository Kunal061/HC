import React from 'react'

export default function Card(props) {
  return (
    <>
  <div className='flex flex-col items-center gap-4 p-6 border-2 rounded-2xl shadow-lg bg-color-white dark:bg-yellow-100 w-full max-w-sm mx-auto mt-6 hover:bg-blue-500 transition-all duration-500 active:bg-amber-700'>

    <img className="object-cover w-50 h-50 " src={props.imageurl} alt="Sample Image"/>
    <h2 className="text-black">{props.title}</h2>
    <p className="text-blue-600 dark:text-red-400">{props.paragraph}</p>
    <button className="bg-blue-500 text-white rounded-full duration-300 ease-in-out ">{props.buttonText}</button>
  </div>
    </>
  )
}
