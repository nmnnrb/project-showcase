import React from 'react'

function footer() {
  return (
    <div className='w-full'>
        <div className="max-w-screen-xl mx-auto py-10 flex flex-col md:flex-row md:gap-32">
            <div className="text-[6.5rem] mb-7 md:text-[11rem] font-medium tracking-tight leading-none  basis-1/2"><h1>projects.</h1></div>
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
            <p className='text-right ml-3 mt-6 text-xs'>This is just a showcase or the showing of my project in a interactive pattern you can always visit my latest resume by click the <a href="http://bit.ly/Namanportfolio">below button</a> .</p>
            <a href="http://bit.ly/Namanportfolio"> <img className='mt-10 ml-1   w-32 h-6' src='/botton.png' /></a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default footer