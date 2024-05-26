import React from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";


function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div className="flex items-center justify-center mt-10">
        <div id="my_modal_6" className="w-[600px] modal-middle" >
          <div className="modal-box  dark:bg-slate-100 light:bg-white ">
            <form method="dialog" className="modal-backdrop">
          <Link to="/" className="text-pink-500">
                    X
                  </Link>
          </form>
            <h3 className="font-bold text-2xl">
              Welcome <span className="text-pink-500">User!!</span>
            </h3>
            <h5 className="py-4">Please enter your details</h5>

            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <div>
              <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-3 py-3 my-3 border-slate-300 rounded-md dark:bg-slate-200 light:bg-white"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && <span className="text-sm text-pink-500">This field is required</span>}
                <br /><br />
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-3 my-3 border-slate-300 rounded-md dark:bg-slate-200 light:bg-white"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && <span className="text-sm text-pink-500">This field is required</span>}
                <br /><br />
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-3 my-3 border-slate-300 rounded-md dark:bg-slate-200 light:bg-white"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && <span className="text-sm text-pink-500">This field is required</span>}
                
              </div>
              <div className="flex">
                <button className="btn btn-md btn-secondary my-4 px-7 dark:text-white">
                  Register
                </button>
                <p className="ml-5 mt-8">
                  Aready Registered?
                  <button className="text-pink-500 underline"
                  onClick={()=>document.getElementById('my_modal_5').showModal()}>
                     Login
                  </button>
                  <Login/>
                </p>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Register;
