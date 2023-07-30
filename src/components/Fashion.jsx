import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Fashion() {
  const [listItems, setListItems] = useState([]);
  const location = useLocation();
  const state = location.state;

  useEffect(() => {
    const result = async () => {
      const res = await fetch(
        "https://fakestoreapi.com/products/category/men's clothing?limit=9"
      );
      const json = await res.json();
      setListItems(json);
    };
    result();
  }, []);

  return (
    <div className="flex w-full flex-col p-edge items-center">
      <div className="font-bold text-4xl py-8">
        {state ? "Searched: " + state?.text : "Man & Woman Fashion"}
      </div>
      {state && state?.data.length === 0 && "No Results Found"}
      <ul className="grid grid-flow-row grid-cols-3 justify-between gap-4">
        {state
          ? state?.data.map((item, id) => {
              return (
                <li
                  className="bg-white shadow-lg flex p-4 flex-col items-center jus\"
                  key={id}
                >
                  <h2 className="h-7 overflow-hidden">{item.title}</h2>
                  <div className="pb-4">
                    <span className="text-amber-900">Price</span>
                    <span className="text-sm"> $ {item.price}</span>
                  </div>
                  <img src={item.image} className="h-[200px] w-[200px]" />
                  <button className="text-white bg-zinc-950 rounded-md p-2 my-4 border-neutral-900 border-1">
                    Add to Cart
                  </button>
                </li>
              );
            })
          : listItems.map((item, id) => {
              return (
                <li
                  className="bg-white shadow-lg flex p-4 flex-col items-center jus\"
                  key={id}
                >
                  <h2 className="h-7 overflow-hidden">{item.title}</h2>
                  <div className="pb-4">
                    <span className="text-amber-900">Price</span>
                    <span className="text-sm"> $ {item.price}</span>
                  </div>
                  <img src={item.image} className="h-[200px] w-[200px]" />
                  <button className="text-white bg-zinc-950 rounded-md p-2 my-4 border-neutral-900 border-1">
                    Add to Cart
                  </button>
                </li>
              );
            })}
      </ul>
    </div>
  );
}

export default Fashion;
