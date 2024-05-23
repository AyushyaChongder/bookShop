import React from "react";


function Hero() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="left w-full md:w-1/2 ">
          <div className="hero min-h-screen">
            <div className="hero-content">
              <div className="max-w-xl md:my-12">
                <h1 className="text-5xl font-bold my-5">Welcome to bookShop, Learn something new <span className="text-pink-500">everyday!!!</span></h1>
                <h3 className="text-justify py-2 my-3">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  autrepudiandae et a id nisi.Provident cupiditate voluptatem et
                  in. Quaerat fugiat ut assumenda excepturi exercitationem
                  quasi. In deleniti eaque aut repudiandae et a id nisi.
                </h3>
                <label className="input input-bordered flex items-center gap-2 dark:bg-slate-100 light:bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input type="text" className="grow" placeholder="Email" />
                </label>
                <button className="btn btn-md btn-secondary my-5 px-5 py-1 dark:text-white">Get Started</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right order-1 w-full md:w-1/2 ">
          <img src={'/img/books1.png'} className="ms-auto w-md mt-12"/>
        </div>
      </div>
    </>
  );
}

export default Hero;
