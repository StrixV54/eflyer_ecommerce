import { useEffect, useState } from "react";
import Card from "./Card";

function Section() {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const result = async () => {
      const res = await fetch(
        "https://fakestoreapi.com/products/category/electronics?limit=9"
      );
      const json = await res.json();
      setListItems(json);
    };
    result();
  }, []);

  return (
    <div className="flex w-full flex-col p-edge items-center">
      <div className="font-bold md:text-4xl text-xl py-8">
        Electric Appliances
      </div>
      <ul className="grid grid-flow-row grid-cols-2 md:grid-cols-3 justify-between gap-4">
        {listItems.map((item, id) => {
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

export default Section;
