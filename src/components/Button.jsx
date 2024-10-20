import { IoIosReturnRight } from "react-icons/io";

function Button({title = "Get Started" , click}) {
  return (
    <div onClick={() => (window.location.href = click)} className="max-w-40 hover:scale-x-110 hover:cursor-pointer px-4 py-2 flex   my-2 items-center gap-2 justify-between   bg-zinc-100 text-black rounded-full" >
        <span className=" text-sm font-medium "  > {title }  </span>
        <IoIosReturnRight/>
    </div>
  )
}

export default Button