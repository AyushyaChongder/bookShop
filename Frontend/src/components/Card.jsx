import React from "react";
import list from "../../public/list.json";

function Card({items}) {
  return (
    <>
      <div className="my-5 px-2">
      <div className="card shadow-md shadow-slate-900 dark:shadow-slate-200 w-full max-w-sm mx-auto hover:scale-105 duration-200">
        <figure>
          <img
            src={items.image}
            alt="Shoes"
            className="w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg font-bold truncate">{items.name}</h2>
          <p className="text-sm text-gray-600">{items.title}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary dark:text-white">Buy now @ Rs {items.price}</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Card;
