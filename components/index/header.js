import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);
  const clicked = () => {
    setClick(true);
    console.log(click);
  };
  const notclicked = () => {
    setClick(false);
    console.log(click);
  };
  return (
    <div className="">
      <div className="lg:hidden relative absolute flex">
        <div className="absolute z-20 w-full bg-white p-5 flex items-center justify-between">
          <img
            className="w-[18rem]"
            src="http://www.coalmongolia.mn/wp-content/uploads/2022/05/22-logo-black-mon.png"
          />
          <div
            onClick={click ? notclicked : clicked}
            className="relative flex m-10 w-8 h-5 "
          >
            <span
              className={
                click
                  ? `transition-all duration-700 rotate-[45deg] translate-y-2 absolute text-black w-8 h-[2.5px] bg-black`
                  : `transition-all duration-700 absolute text-black w-8 h-[2.5px] bg-black`
              }
            ></span>
            <span
              className={
                click
                  ? `transition-all duration-700 opacity-[0] rotate-[45deg] translate-y-2 absolute text-black w-8 h-[2.5px] bg-black`
                  : `transition-all duration-700 top-2 opacity-[1] absolute text-black w-8 h-[2.5px] bg-black`
              }
            ></span>
            <span
              className={
                click
                  ? `top-4 transition-all duration-700 rotate-[-45deg] -translate-y-2 absolute text-black w-8 h-[2.5px] bg-black`
                  : `top-4 transition-all duration-700 absolute text-black w-8 h-[2.5px] bg-black`
              }
            ></span>
          </div>
        </div>
        <div
          className={
            click
              ? `transition-all duration-700 gap-2 text-black flex flex-col translate-y-[8.7rem] flex absolute z-10 h-[15rem]  bg-white w-full px-6 pt-1 cursor-pointer`
              : `transition-all duration-700 gap-2 text-black flex flex-col -translate-y-[8.7rem] z-10 h-[8.7rem] absolute bg-white w-full px-6 pt-1 cursor-pointer`
          }
        >
          <h1 className="border-b p-2">Хөтөлбөр</h1>
          <h1 className="border-b p-2">Үзэсгэлэн</h1>
          <h1 className="border-b p-2">Спонсор</h1>
          <h1 className="border-b p-2">Мандат</h1>
          <h1 className=" pb-10 p-2">Танилцуулга</h1>
        </div>
      </div>
      <div className="absolute z-10 w-full px-[11rem] hidden md:hidden lg:flex lg:flex-col">
        <div className="flex h-16 justify-between">
          <div className="flex items-center gap-5">
            <div className="w-5">
              <BsFillTelephoneFill />
            </div>
            <h1>+ 976 7011 5590</h1>
            <div className="w-5">
              <AiFillFacebook size={"100%"} />
            </div>
            <div>
              <BsTwitter />
            </div>
            <h1>Бүртгэл явагдаж байна.</h1>
          </div>
          <div className="flex items-center">
            <h1>Холбоо барих</h1>
          </div>
        </div>
        <div className="flex justify-between">
          <img
            className="w-[20rem]"
            src="http://www.coalmongolia.mn/wp-content/uploads/2022/05/22-logo-white-mon.png"
          />
          <div className="flex items-center gap-7 cursor-pointer">
            <div>Хөтөлбөр</div>
            <div>Үзэсгэлэн</div>
            <div>Спонсор</div>
            <div>Мандат</div>
            <div>Танилцуулга</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
