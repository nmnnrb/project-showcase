import React from 'react'

function footer() {
  return (
    <div className='w-full'>
        <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
            <div className="text-[11rem] font-medium tracking-tight leading-none  basis-1/2"><h1>projects.</h1></div>
            <div className="  basis-1/2 flex gap-4">
            <div className="  basis-1/3" >
                <h4 className='mb-5  text-zinc-500' >Socials</h4>
                {["Instagram", "facebook", "Linkedin"].map((item ,key) => <a className='block capitalize mt-2 text-zinc-600' key={key} href="https://www.linkedin.com/in/nmnnrb/">{item}</a>)}
            </div>
            <div>
            <h4 className='mb-5  text-zinc-500' >Socials</h4>
            {["Instagram", "facebook", "Linkedin"].map((item ,key) => <a className='block capitalize mt-2 text-zinc-600' key={key} href="https://www.linkedin.com/in/nmnnrb/">{item}</a>)}
            
            </div>
            <div className='basis-1/3 flex flex-col items-center justify-end '>
            <p className='text-right ml-3 mt-6 text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consequuntur dolorem numquam quod iure eveniet in corporis! Voluptate.</p>
            <a href="https://www.linkedin.com/in/nmnnrb/"> <img className='mt-10 ml-11  w-32 h-6' src='/botton.png' /></a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default footer