import { motion } from "framer-motion"


function  Maarquee({imagesurls}) {
  return (
    <div>
    <div className= 'flex flex w-full h-[6rem]  overflow-hidden'>
    
    <motion.div initial={{x: "0"}} animate={{x: "-100%"}} transition={{ease: 'linear' , duration: 25,repeat: Infinity }} className="flex flex-shrink-0 gap-40  pr-40">
      {imagesurls.map((url,index) => <img key={`${url} 1`} src={url} className="w-15 mb-32 h-20 flex-shrink-0" alt="" />)}
      </motion.div>
    <motion.div initial={{x: "0"}} animate={{x: "-100%"}} transition={{ease: 'linear' , duration: 25 ,repeat: Infinity }} className="flex flex-shrink-0 gap-40  pr-40">
      {imagesurls.map((url,index) => <img key={`${url} 1`} src={url} className="w-15 mb-32 h-20 flex-shrink-0" alt="" />)}
      </motion.div>
      </div>
   
   
    <div className="mt-24 flex overflow-hidden h-[6rem] mb-7">
    <motion.div initial={{x: "-100%"}} animate={{x: "0"}} transition={{ease: 'linear' , duration: 25,repeat: Infinity }} className="flex flex-shrink-0 gap-40  pr-40">
      {imagesurls.map((url,index) => <img key={`${url} 1`} src={url} className="w-15 mb-32 h-20 flex-shrink-0" alt="" />)}
      </motion.div>
    <motion.div initial={{x: "-100%"}} animate={{x: "0"}} transition={{ease: 'linear' , duration: 25 ,repeat: Infinity }} className="flex flex-shrink-0 gap-40  pr-40">
      {imagesurls.map((url,index) => <img key={`${url} 1`} src={url} className="w-15 mb-32 h-20 flex-shrink-0" alt="" />)}
      </motion.div>
    </div>

    </div>
    
  )
}

export default Maarquee