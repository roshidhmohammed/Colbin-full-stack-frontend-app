// React
import { useState } from "react";

// React navigation
import { Link, useNavigate } from "react-router-dom";

// Reusable components
import Button from "../common/Button";

// APIs
import { axiosInstance } from "../../utils/apis/axiosInstance";

// React hook form
import { useForm } from "react-hook-form";

// Alert
import { toast } from "sonner";

// Icons
import { FaLock, FaUnlock } from "react-icons/fa";

// Custom hooks
import useFetchUserData from "../../hooks/useFetchUserData";

const Login = () => {
  useFetchUserData();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignin = async (data) => {
    await axiosInstance
      .post(
        "user/login",
        {
          emailId: data.emailId,
          password: data.password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        navigate("/", { replace: false });
        toast.success(res.data.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  
  return (
    <div className=" h-screen flex flex-col justify-center mx-auto max-w-7xl ">
      <div className="px-5 sm:px-0  ">
        <div className="w-full py-6 mx-auto md:w-3/5 lg:w-2/5">
          <h2 className="mt-10 text-center text-4xl mb-1 font-bold tracking-tight text-gray-900">
            Login your account
          </h2>
          <p className="mb-2 text-sm font-normal text-center text-gray-700 md:text-base">
            New customer?
            <Link
              to="/sign-up"
              className="text-purple-700 hover:text-purple-900 underline font-bold ml-1"
            >
              Sign up
            </Link>
          </p>
          <form
            className="mt-10 space-y-4"
            onSubmit={handleSubmit(handleSignin)}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  {...register("emailId", {
                    required: "Email Id is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter the valid email",
                    },
                  })}
                  name="emailId"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <p className=" text-red-700 font-bold ">
                  {errors?.emailId?.message}
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm/6 font-medium text-gray-900">
                Password
              </label>
              <div className="mt-2 relative">
                <input
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/,
                      message:
                        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character",
                    },
                  })}
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                {!showPassword ? (
                  <FaLock
                    className=" absolute right-6 top-4 text-gray-100 cursor-pointer "
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <FaUnlock
                    className=" absolute right-6 top-4 text-gray-100 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
                <p className=" text-red-700 font-bold ">
                  {errors?.password?.message}
                </p>
              </div>
            </div>

            <Button
              text={"Sign in"}
              bgColor={"bg-indigo-500"}
              hoverBgColor={"hover:bg-indigo-400"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
