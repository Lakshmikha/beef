import React from 'react'

function Poster() {
  return (
    <div className="flex flex-col md:flex-row items-start p-4 mt-8 bg-black">

    
    <div className= "flex flex-col w-full md:w-1/3 space-y-2 mt-8 p-4 ">
        
            <img src="https://image.tmdb.org/t/p/w1280/wQmQgB6jlXV28XyCrCmtGnsKjHS.jpg" 
            alt="Beef poster" 
            className="rounded-lg shadow-2xl h-auto w-full mb-2"/>
            <h2 className="text-4xl font-bold text-center w-full text-white-700 text-shadow">BEEF</h2>
            <span className="text-red-700 text-3xl text-center">★ ★ ★ ★ ☆</span> 
            </div>
        

            <div className="md:w-2/3 p-4 md:pl-32 md:mt-8 md:pr-32 ">
            <h3 className="text-white text-5xl font-bold pb-4 text-shadow">About</h3>
        <div className="text-white  leading-relaxed text-xl text-shadow">
        <p>
        BEEF is a dark comedy-drama series that explores the aftermath of a road rage incident between two strangers, Danny and Amy, whose lives become increasingly intertwined in destructive ways. The show delves into themes of anger, revenge, and personal fulfillment in a modern context.
        </p>
        <br />
        <p>
Danny, a struggling contractor, and Amy, a successful entrepreneur, find their seemingly separate lives spiraling into chaos as their feud escalates. Their animosity leads them to make impulsive decisions that affect their families and friends, ultimately revealing deeper insecurities and unresolved issues.
</p>
<br />
<p>
The series examines how small conflicts can escalate into significant life changes, highlighting the impact of social media, societal pressures, and the quest for identity in contemporary life. With a mix of humor and poignant moments, Beef invites viewers to reflect on the complexities of human relationships and the consequences of unchecked emotions.
        </p>
        </div>
    </div>
    </div>
    
  )
}

export default Poster
