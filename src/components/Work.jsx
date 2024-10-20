import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

function Work() {
  const [images, setImages] = useState([
    {
      url: "/work/5.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "/work/4.jpg",
      top: "53%",
      left: "47%",
      isActive: false,
    },
    {
      url: "/work/3.jpg",
      top: "47%",
      left: "54%",
      isActive: false,
    },
    {
      url: "/work/2.jpg",
      top: "54%",
      left: "49%",
      isActive: false,
    },
    {
      url: "/work/1.jpg",
      top: "47%",
      left: "57%",
      isActive: false,
    },
    {
      url: "/work/3.jpg",
      top: "55%",
      left: "58%",
      isActive: false,
    },
    {
      url: "/work/2.jpg",
      top: "52%",
      left: "46%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imageShow(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }
    const val = Math.floor(data * 100);
    console.log(val);
    switch (val) {
      case 0:
        imageShow([]);
        break;
      case 1:
        imageShow([0]);
        break;
      case 2:
        imageShow([0, 1]);
        break;
      case 3:
        imageShow([0, 1, 2]);
        break;
      case 4:
        imageShow([0, 1, 2, 3]);
        break;
      case 5:
        imageShow([0, 1, 2, 3, 4]);
        break;
      case 6:
        imageShow([0, 1, 2, 3, 4, 5]);
        break;
      case 7:
        imageShow([0, 1, 2, 3, 4, 5, 6]);
        break;
      case 8:
        imageShow([0, 1, 2, 3, 4, 5, 6,7]);
        break;
    }
  });
 


  return (
    <div className="w-full mt-16 ">
      <div className=" relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[30vw] font-medium select-none leading-none tracking-tight">
          work
        </h1>
        <div className=" absolute top-0 w-full h-full ">
          {images.map(
            (item, index) =>
              item.isActive && (
                <img
                  key={index}
                  className="w-96 -translate-x-[50%] -translate-y-[50%] absolute rouned-md"
                  src={item.url}
                  alt="scroll"
                  style={{
                    top: item.top,
                    left: item.left,
                  }}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
