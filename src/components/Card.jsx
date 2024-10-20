import { motion } from 'framer-motion';

import { FaArrowRightLong, FaLinkedin } from "react-icons/fa6";
function Card({width , start , para, hover="false" , contact}) {

  return (
    <motion.div whileHover={{backgroundColor: hover===true && "#7443ff", padding: "25px"}} className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between `}>
       
      <div className='w-full'>
       <div className='w-full flex items-center justify-between'> 
            <h3>HeadingOne</h3>
            <FaArrowRightLong />
        </div> 
        <div>
          {
          (contact === false ) ? ( <h1 className='text-3xl font-medium mt-5  '>Whatever heading</h1> ) : ( <h1 className='text-7xl font-medium'>Contact Us</h1>)
          }
        </div>
       </div>
       <div>
        {
          contact === true && (
            <>
                    <hr className="mt-2 mb-3 ml-3 w-[80%]"></hr>
            <div className='flex flex-col justify-center items-center'>
      
              <div className='flex w-[80%] flex-col gap-3'>
              <a href='https://www.linkedin.com/in/nmnnrb/' className="w-24 hover:bg-blue-700 transition duration-300 bg-blue-600 flex px-4 rounded-xl py-2"> LinkedIn</a>
              <a className=" w-fit hover:bg-blue-700 transition duration-300 bg-blue-600 flex px-4 rounded-xl py-2" href="mailto:snaman9967@gmail.com">Send Email</a>
              <a className=" w-fit hover:bg-blue-700 transition duration-300 bg-blue-600 flex px-4 rounded-xl py-2" href="tel:+919634440477">Call Us</a>
              </div>
              </div>
            </>
          )
        }
       </div>
       <div className='text-lg    w-full mt-60'>
        {
                start === true && (
                    <>
                           <h1 className='font-semibol text-6xl tracking-tight leading-none'>start a project </h1>
        <a href='https://www.linkedin.com/in/nmnnrb/' className='rounded-full py-2  h-[35px] border-[1px] border-zinc-50 text-white px-7 text-sm mt-6 '>clickhere</a>
           
                    </>
                )
        }
        {
            para && (
                <>
                  <p className='text-sm font-medium text-zinc-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </>
            )
        }
       
       </div>
     </motion.div>
  );
}

export default Card 