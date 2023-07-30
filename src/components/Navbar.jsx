import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isdropdown, setIsdropdown] = useState(false);
  const inputValue = useRef(null);

  const [searchResults, setSearchResults] = useState([]);

  const nav = useNavigate();

  const search = async (input) => {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const json = await res.json();
    const out = json.filter((item) =>
      item.description.toLowerCase().includes(input.toLowerCase())
    );
    nav("/", { state: { data: out, text: input } });
  };

  // const [screenSize, setScreenSize] = useState(getCurrentDimension());

  // function getCurrentDimension() {
  //   return {
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   };
  // }

  // console.log(screenSize.width);
  // useEffect(() => {
  //   const updateDimension = () => {
  //     setScreenSize(getCurrentDimension());
  //   };
  //   window.addEventListener("resize", updateDimension);

  //   return () => {
  //     window.removeEventListener("resize", updateDimension);
  //   };
  // }, [screenSize]);

  return (
    <div className="w-full flex flex-col-reverse md:flex-row gap-3 md:gap-0 px-2  md:justify-between">
      <div className="flex flex-row justify-between md:m-none mt-2 md:m-0 items-center">
        <div className="flex flex-row gap-2">
          <button className="w-fit">
            <Bars3Icon className="h-9 w-9 text-white" />
          </button>
          <button
            className="flex relative text-sm text-white px-3 items-center bg-black w-fit rounded-md gap-1 md:gap-2"
            onClick={() => setIsdropdown(!isdropdown)}
          >
            All Category
            <ChevronDownIcon className="h-3 w-3" />
            {isdropdown && (
              <div className="absolute w-[200px] p-2 bg-white text-slate-900 -translate-x-3 z-10 translate-y-20 rounded-md items-center justify-center">
                <Link to="/">
                  <p className="my-2 mt-3 hover:text-yellow-600 w-full h-[30px] items-center justify-center">
                    Men & Woman Fashion
                  </p>
                </Link>
                <Link to="/Electric">
                  <p className="my-2 hover:text-yellow-600 w-full h-[30px] items-center justify-center">
                    Electric & Appliances
                  </p>
                </Link>
              </div>
            )}
          </button>
        </div>
        <div className="flex flex-row items-center">
          <input
            className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 px-2 py-1 w-[130px] rounded-s-md ring-1 ring-slate-200 shadow-sm md:w-[220px] md:ml-4 ml-0 sm:w-[300px]
          lg:w-[490px]"
            type="text"
            ref={inputValue}
            aria-label="Search this blog"
            placeholder="Search this blog"
            onKeyDown={(event) => {
              event.key === "Enter" && search(inputValue.current.value);
            }}
          />
          <button
            className="flex h-[35px] w-8 rounded-e-md bg-orange-600 items-center justify-center"
            onClick={() => search(inputValue.current.value)}
          >
            <MagnifyingGlassIcon className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <button className="flex h-[33px] text-sm text-black items-center px-3 bg-white w-fit rounded-md gap-2">
          🇮🇳 &nbsp; English
          <ChevronDownIcon className="h-4 w-4 text-black" />
        </button>
        <div className="flex flex-row">
          <div className="flex flex-row items-center text-white">
            <button className="flex h-[35px] w-8 items-center justify-center ml-2">
              <ShoppingCartIcon className="h-5 w-5 text-white" />
            </button>
            CART
          </div>
          <div className="flex flex-row items-center text-white">
            <button className="flex h-[35px] w-8 items-center justify-center ml-2">
              <UserIcon className="h-5 w-5 text-white" />
            </button>
            CART
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
