import React from "react";

function Register() {
  return (
    <>
      <div className="flex items-center justify-center mt-20">
        <div id="my_modal_6" >
          <div className="modal-box dark:bg-slate-100 light:bg-white w-full ">
            <h3 className="font-bold text-2xl">
              Welcome <span className="text-pink-500">User!!</span>
            </h3>
            <h5 className="py-4">Please enter your details</h5>

            <form method="dialog">
              <div>
              <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-3 py-3 my-3 border-slate-300 rounded-md dark:bg-slate-200 light:bg-white"
                />
                <br />
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-3 my-3 border-slate-300 rounded-md dark:bg-slate-200 light:bg-white"
                />
                <br />
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-3 my-3 border-slate-300 rounded-md dark:bg-slate-200 light:bg-white"
                />
                <br />
                
              </div>
              <div className="flex">
                <button className="btn btn-md btn-secondary my-4 px-7 dark:text-white">
                  Register
                </button>
                <p className="ml-5 mt-8">
                  Aready Registered?
                  <span className="text-pink-500 underline">
                    <a href=""> Login</a>
                  </span>
                </p>
              </div>
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
