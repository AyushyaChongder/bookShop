import React from "react";
import Card from "./Card";
import list from "../../public/list.json";
import {Link} from "react-router-dom";

function Book() {
    
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 ">
        <div className="mt-32 items-center justify-center text-center">
          <h1 className="text-3xl font-semibold">
            We are delighted to have you 
            <span className="text-pink-500"> here :)</span>
          </h1>
          <p className="mt-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque autrepudiandae et
            a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque autrepudiandae et
            a id nisi.Provident cupiditate voluptatem et in. 
          </p>
          <Link to="/">
            <button className="btn btn-secondary my-8 px-5 dark:text-white">Go Back</button>
          </Link>
          
        </div>
        <div className="my-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {list.map((items) => (
              <Card items={items} key={items.id} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Book;
