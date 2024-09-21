import React from 'react'

function Poster() {
  return (
    <div className="flex flex-col w-48 md:w-1/3 space-y-2 mt-8 ml-2 ">
        <img src="https://image.tmdb.org/t/p/w1280/wQmQgB6jlXV28XyCrCmtGnsKjHS.jpg" 
        alt="Beef poster" 
        className="h-1/2 w-1/2 rounded-lg shadow-2xl"/>
    </div>
  )
}

export default Poster
