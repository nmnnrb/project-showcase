import Maarquee from "./Maarquee";

function Marquees() {
    const images = [
        [
            "/skillsicon/cpp.svg",
            "/skillsicon/css.svg",
            "/skillsicon/express.png",
            "/skillsicon/html.svg", // Fixed typo here
            "/skillsicon/js.png",
            "/skillsicon/mongo.svg",
            "/skillsicon/nodejs.png",
            "/skillsicon/react.svg",
            "/skillsicon/redux.png",
            "/skillsicon/tailwind.svg",


            "/skillsicon/cpp.svg",
            "/skillsicon/css.svg",
            "/skillsicon/express.png",
            "/skillsicon/html.svg", // Fixed typo here
            "/skillsicon/js.png",
            "/skillsicon/mongo.svg",
            "/skillsicon/nodejs.png",
            "/skillsicon/react.svg",
            "/skillsicon/redux.png",
            "/skillsicon/tailwind.svg",  "/skillsicon/cpp.svg",
            "/skillsicon/css.svg",
            "/skillsicon/express.png",
            "/skillsicon/html.svg", // Fixed typo here
            "/skillsicon/js.png",
            "/skillsicon/mongo.svg",
            "/skillsicon/nodejs.png",
            "/skillsicon/react.svg",
            "/skillsicon/redux.png",
            "/skillsicon/tailwind.svg",
        
        ]
    ];
    return (
        <div className="py-20 mt-32 w-full relative overflow-hidden"  >
           {images.map((item,index) => <Maarquee key={index}  imagesurls={item}  />)}
        </div>
        
    )
}

export default Marquees