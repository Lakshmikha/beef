import React from 'react'

function Banner () {
  return (
    <div className='relative overflow-hidden h-[400px]'>
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/yVqKByS20Uc?rel=0&autoplay=1&mute=1&enablejjsapi=1&si=JV2pBg1gIv_SgqRt" title="Beef trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen
       className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto"></iframe>
    </div>
  )
}

export default Banner;
