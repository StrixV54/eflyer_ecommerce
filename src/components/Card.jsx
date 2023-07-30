function Card(props) {
  const { title, price, img, id } = props;

  return (
    <li className="bg-white shadow-lg flex p-4 flex-col items-center justify-center">
      <h2 className="h-7 overflow-hidden">{title}</h2>
      <div className="pb-4">
        <span className="text-amber-900">Price</span>
        <span className="text-sm"> $ {price}</span>
      </div>
      <img src={img} className="md:h-[200px] h-[100px]" />
      <button className="text-white bg-zinc-950 rounded-md p-2 my-4 border-neutral-900 border-1 md:text:md text-xs">
        Add to Cart
      </button>
    </li>
  );
}

export default Card;
