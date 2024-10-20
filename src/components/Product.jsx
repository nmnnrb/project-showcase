import React, { useState } from 'react'
import Button from './Button'

function Product({data , mover ,count , bgColor}) {
  const [bgColorr, setBgColorr] = useState("transparent");
  return (
    <div className={`w-full hover:bg-[${bgColor}]  text-white`}   style={{ backgroundColor: bgColorr,transition: "background-color 0.3s Ease-In-Out" }} onMouseEnter={() => {
      setBgColorr(bgColor); // Set background color on hover
    }}
    onMouseLeave={() => setBgColorr("transparent")} // Reset on mouse leave
  >
        <div onMouseEnter={() => {mover(count)} } key={count} className="max-w-screen-xl  md:h-[23rem]   mx-auto flex flex-col md:flex-row my-44 md:my-0 p-2 md:items-center md:justify-between">
          <div className="flex flex-wrap md:w-1/3"><h1 className='font-medium capitalize mb-6 md:mb-0 text-6xl' >{data.title}</h1></div>
            
            <div className="dets md:w-1/3 flex flex-col  ">
                <p className='mb-10 text-zinc-200 text-xs w-fit md:text-sm' >{data.description}</p>
                <div className="flex gap-5">
                <p className='font-normal text-zinc-400 text-sm' ><b className='font-extrabold text-md mr-1' >Skills</b> {data.skills} </p>
                <p className='font-normal text-zinc-100 mb-12 text-sm' ><b className='font-extrabold text-md mr-1' >Key</b> {data.key} </p>
                </div>
                <div className="flex items-center gap-4 justify-end">
                {data.live && <Button click={data.livelink} title="Live Link"/>}
                {data.case && <Button click={data.githublink} title='Git-Hub Link' />}
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Product  