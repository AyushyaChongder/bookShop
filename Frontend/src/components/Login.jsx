import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div>
        <dialog id="my_modal_5" className="modal sm:modal-middle">
          <div className="modal-box dark:bg-slate-100 light:bg-white ">
          <form method="dialog" className="modal-backdrop">
          <Link to="/" className="text-pink-500">
                    X
                  </Link>
          </form>
            <h3 className="font-bold text-2xl">
              Welcome <span className="text-pink-500">User!!</span>
            </h3>
            <h5 className="py-4">Please enter your login credentials</h5>

            <form onSubmit={handleSubmit(onSubmit)} method="dialog" >
              <div>
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-3 my-3 border-slate-300 rounded-md dark:bg-slate-200 light:bg-white"
                  {...register("email", { required: true })}
                />
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
                {errors.password && <span className="text-sm text-pink-500">This field is required</span>}
              </div>
              <div className="flex">
                <button className="btn btn-md btn-secondary my-4 px-7 dark:text-white">
                  Log in
                </button>
                <p className="ml-5 mt-8">Not Registered? <Link to="/register" className="text-pink-500 underline"> Register</Link></p>
              </div>
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
          <button>
                    close
                  </button>
          </form>
        </dialog>
      </div>
    </>
  );
}

export default Login;
