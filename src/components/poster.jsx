import React from 'react'

function Poster() {
  return (
    <div className= "flex flex-col w-full md:w-1/3 space-y-2 mt-8 p-4 ">
        
            <img src="https://image.tmdb.org/t/p/w1280/wQmQgB6jlXV28XyCrCmtGnsKjHS.jpg" 
            alt="Beef poster" 
            className="rounded-lg shadow-2xl h-auto w-full mb-2"/>
            <h2 className="text-4xl font-bold text-center w-full text-red-700">BEEF</h2>
            <span className="text-red-700 text-3xl text-center">★ ★ ★ ★ ☆</span> 
        
       
    </div>
  )
}

export default Poster
