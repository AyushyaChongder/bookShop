import React from "react";

function Login() {
  return (
    <>
      <div>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box dark:bg-slate-100 bg-gray-400 ">
            <h3 className="font-bold text-2xl">Welcome <span className="text-pink-500">User!!</span></h3>
            <h5 className="py-4">
              Please enter your login credentials
            </h5>
           
              <form method="dialog">
                <div>
                  <span>Email</span>
                  <br />
                  <input type="email" placeholder="Enter your email" className="w-full px-3 py-3 my-3 border-slate-300 rounded-md" />
                  <br />
                  <span>Password</span>
                  <br />
                  <input type="password" placeholder="Enter your password" className="w-full px-3 py-3 my-3 border-slate-300 rounded-md" />
                </div>
                <button className="btn btn-md btn-secondary my-4">Log in</button>
              </form>
           
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
