import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  const products = [
    {
      title: "UserSphere",
      description:
        "UserSphere is a dynamic social media platform that empowers users to connect, share content, and engage with their communities. UserSphere offers seamless user experiences, allowing individuals to create and manage personalized profiles, share updates, and interact with others through likes and comments. With an intuitive interface and a focus on community building, UserSphere fosters meaningful connections and encourages active participation among its users.",
      skills: "EJS ,NodeJS, ExpressJS, MongoDB",
      key: "Authentication, Registration, Login ,Create/Edit Post",
      live: false,
      case: true,
      livelink: "/",
      githublink: "https://github.com/nmnnrb/UserSphere",
    },
    {
      title: "HealthHub",
      description:
        "HealthHub website using React, Node.js, and Express, with a special focus on backend integration. The website allows clients to send queries directly through a contact form, and the backend securely processes these messages, sending them directly to your Gmail for easy management and prompt responses. This project showcases my skills in full-stack development and effective communication between the frontend and backend.",
      live: true,
      case: true,
      skills: "React, NodeJS ,ExpressJS",
      key: "BMI Calculator, Receive Direct Message in Email [nodeMailer]",
      livelink: "https://gym-production-service-frontend.onrender.com/",
      githublink: "https://github.com/nmnnrb/GYM-production-service"
    }, {
      title: "Focus Chrome-Extension",
      description:
        "This Chrome extension is designed to improve user focus by hiding distracting elements on YouTube, specifically the comments section and notifications. By removing these elements from view, users can concentrate better on the video content without being tempted by the often cluttered or distracting interactions that YouTube presents. This Chrome extension allows users to hide YouTube comments and notifications with a single button click from a popup UI. It injects a content script into YouTube pages, allowing interaction with the page's DOM (Document Object Model) to hide the elements specified.",
      live: false,
      case: true,
      skills: "Javascript, JSON ",
      key: "Hide the sidebar Suggestion and Comments window",
      livelink: "/",
      githublink: "https://github.com/nmnnrb/Focus-chrome-extension"
    },
    {
      title: "URL-Shortner",
      description:
        "The URL Shortener project is a robust web application built from scratch with a strong focus on backend and frontend development, providing seamless API integration and smooth user experience. It allows users to shorten long URLs into compact, easily shareable links. The backend is meticulously designed to ensure efficiency and security, handling URL mapping, redirection, and data storage. It features a well-structured API that enables easy creation, retrieval, and management of shortened links.",
      live: true,
      case: true,
      skills: "RectJS, NodeJS, ExpressJS, MongoDB",
      key: "Short the url, Store URL's, Delete and Copy Functionality",
      livelink: "https://url-shortner-frontend-vb32.onrender.com",
      githublink: "https://github.com/nmnnrb/url-shortner--MERN"
    },  {
      title: "Local-Shop Display menu",
      description:
        "This project began as a hands-on practice with React, focusing on integrating APIs to enhance my understanding of frontend development. As the project evolved, it took shape as a dynamic inventory management and display tool, tailored for local shops. Built entirely with React, the interface is designed to be user-friendly and efficient, allowing shop owners to effortlessly add, update, and manage their inventory. ",
      live: false,
      case: true,
      skills: "RectJS, Axios ",
      key: "Display the Products by taking details as input",
      livelink: "/",
      githublink: "https://github.com/nmnnrb/ecomm-display-menu"
    }
    
  ];

  const backgroundColors = [
    "#FB523B", // Color for ARQUILE
    "#4A576B", // Color for TTR
    "#374151", // Color for YIRR
    "#1e3a8a", // Color for YAHOO!
    "#FB523B", // Color for Naman
  ];

  const [pos, setPos] = useState();
  const mover =(val) => {
    setPos(val*23); 
  }
  return (
    <div className=" relative">
      {products.map((item , index) => (
        <Product count={index} mover={mover} data={item} bgColor={backgroundColors[index]} />
      ))}
      <div className="w-full  pointer-events-none h-full absolute top-10">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{y: pos +`rem`}}
          transition={{ease: [0, 0.55, 0.45, 1], duration: .6 }}
          className="window absolute w-[32rem] h-[23rem] left-[45%]  overflow-hidden">
          <motion.div animate={{y: -pos +`rem`}} transition={{ease: [0, 0.55, 0.45, 1], duration: 0.4 }} className="w-full h-full  ">  <video
  autoPlay
  loop
  muted
  playsInline
  width="100%"
  height="100%"
  style={{ borderRadius: '12px' }}
  src="/UserSpher.mp4"
  poster="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d42ab3e32fee7e9535ae_BCGP%20-%2016%209%20(A).webp"
/>

 </motion.div>
          <motion.div animate={{y: -pos +`rem`}} transition={{ease: [0, 0.55, 0.45, 1], duration: 0.4}} className="w-full h-full "> 
          <video
  autoPlay
  loop
  muted
  playsInline
  width="100%"
  height="100%"
  style={{ borderRadius: '12px' }}
  src="/gymproductionvideo.mp4"
  poster="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d42ab3e32fee7e9535ae_BCGP%20-%2016%209%20(A).webp"
/>
          </motion.div>
          <motion.div animate={{y: -pos +`rem`}} transition={{ease: [0, 0.55, 0.45, 1], duration: 0.4}} className="w-full h-full "> <video
  autoPlay
  loop
  muted
  playsInline
  width="100%"
  height="100%"
  style={{ borderRadius: '12px' }}
  src="/"
  poster="/Focus.png"
/></motion.div>

          <motion.div animate={{y: -pos +`rem`}} transition={{ease: [0, 0.55, 0.45, 1], duration: 0.4 }} className="w-full h-full ">
          <video
  autoPlay
  loop
  muted
  playsInline
  width="100%"
  height="100%"
  style={{ borderRadius: '12px' }}
  src="/"
  poster="/url-shortner.png"
/>
          </motion.div>
          <motion.div animate={{y: -pos +`rem`}} transition={{ease: [0, 0.55, 0.45, 1], duration: 0.4}} className="w-full h-full  ">
          <video
  autoPlay
  loop
  muted
  playsInline
  width="100%"
  height="100%"
  style={{ borderRadius: '12px' }}
  src="/localshop.mp4"
  poster=""
/>

          </motion.div>
          <motion.div animate={{y: -pos +`rem`}} transition={{ease: [0, 0.55, 0.45, 1], duration: 0.4 }} className="w-full h-full  bg-sky-600"></motion.div>
        </motion.div>
      </div>
     </div>
  );
}
export default Products;
