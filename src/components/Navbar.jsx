import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl  py-6 items-center justify-between flex flex-col md:flex-row mx-auto border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center">
        <img
          className="pl-2"
          height="25px"
          width="25px"
          src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/664dc8b6bc52b50450919857_webclip.webp"
          alt="logo"
        />

        <div className="links font-regular  flex gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span
                key={index}
                className="inline-block w-[1px] h-7  bg-zinc-700 "
              ></span>
            ) : (
              <a
                key={elem}
                href="#"
                className="text-sm  flex items-center gap-1 hover:text-zinc-200"
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0  0.45em #00FF09" }}
                    className="inline-block w-2 hover:bg-yellow-500 h-2 mr-2 rounded-full bg-green-500"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>

      <Button title={"Contact Me"} click={"https://www.linkedin.com/feed/"} />
    </div>
  );
}

export default Navbar;
