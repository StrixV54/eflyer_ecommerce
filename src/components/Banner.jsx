import Navbar from "./Navbar";
import BannerPNG from "../assets/banner-top-bg.png";
import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Banner() {
  const myStyle = {
    backgroundImage: `url(${BannerPNG})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const dealListTop = [
    "Best Sellers",
    "Gift Ideas",
    "New Releases",
    "Today's Deals",
    "Customer Service",
  ];

  return (
    <header style={myStyle} className="pb-8 w-screen">
      <div className="flex flex-col items-center p-edge">
        <div className="hidden md:flex polygon-shape w-full px-10 justify-center py-4 bg-[#2b2a29]">
          <ul className="flex flex-row gap-5">
            {dealListTop.map((text, id) => {
              return (
                <li key={id}>
                  <a href="#" className="text-white hover:text-orange-500">
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="h-fit my-5">
          <span className="text-[40px] font-bold font-Righteous text-white">
            Eflyer
          </span>
        </div>
        <Navbar />
        <div className="flex relative items-center justify-center flex-col w-full">
          <button className="rounded-full flex w-10 h-10 bg-slate-200/70 items-center justify-center absolute md:left-0 left-2 top-28">
            <ChevronLeftIcon className="h-5 w-5 text-black" />
          </button>
          <button className="rounded-full flex w-10 h-10 bg-slate-200/70 items-center justify-center absolute md:right-0 right-2 top-28 text-black">
            <ChevronRightIcon className="h-5 w-5 text-black" />
          </button>
          <div className="flex font-Poppins text-white flex-col items-center flex-grow">
            <span className="md:text-[38px] text-[25px] pt-16">
              GET STARTED
            </span>
            <span className="md:text-[38px] text-[25px] pb-16">
              YOUR FAVOURITE SHOPPING
            </span>
          </div>
          <button className="h-fit w-fit py-2 px-4 md:py-3 md:px-6 bg-gray-900 text-slate-100 rounded-lg align-middle font-bold md:text-md text-[12px]">
            <Link to="/electric">BUY NOW</Link>
          </button>
        </div>
      </div>
    </header>
  );
}
