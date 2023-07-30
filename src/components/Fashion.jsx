import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "./Card";

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
      <div className="font-bold md:text-4xl text-xl py-8">
        {state ? "Searched: " + state?.text : "Man & Woman Fashion"}
      </div>
      {state && state?.data.length === 0 && "No Results Found"}
      <ul className="grid grid-flow-row grid-cols-2 md:grid-cols-3 justify-between gap-4">
        {state
          ? state?.data.map((item, id) => {
              return (
                <Card
                  key={id}
                  price={item.price}
                  title={item.title}
                  img={item.image}
                />
              );
            })
          : listItems.map((item, id) => {
              return (
                <Card
                  key={id}
                  price={item.price}
                  title={item.title}
                  img={item.image}
                />
              );
            })}
      </ul>
    </div>
  );
}

export default Fashion;
