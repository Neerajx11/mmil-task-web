import { useState } from "react";

import bg from "../assests/bg.png";
import {
  ArrowNarrowRightIcon,
  EyeIcon,
  EyeOffIcon,
} from "@heroicons/react/outline";

const Login = () => {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const toggleIsPassVisible = () => setIsPassVisible((prev) => !prev);

  return (
    <div className="flex min-h-screen justify-center md:align-middle">
      {/* Login background */}
      <div className="hidden bg-lightBrown md:flex">
        <img className="object-contain" src={bg} alt="login background" />
      </div>
      {/* Login Form */}
      <div className="flex flex-col justify-center items-center mx-14">
        {/* Login Heading */}
        <div className="mb-1">
          <p className="text-4xl font-bold mb-2">Embark on a Journey</p>
          <p className="text-xl font-semibold mb-6">to tame the seas...</p>
        </div>
        {/* Form */}
        <div className="min-w-[360px] max-w-[360px]">
          <p className="text-3xl font-semibold mb-6">Sign In</p>
          <form action="">
            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="uppercase font-bold text-xs mb-1 tracking-wide"
              >
                Username
              </label>
              <input
                type="text"
                className="flex w-100 mb-8 border-[3px] p-2 border-black rounded-md focus:outline-none uppercase font-bold text-sm placeholder:uppercase placeholder:text-xs placeholder:p-1 tracking-wide"
                placeholder="enter your fullname"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="uppercase font-bold text-xs mb-1"
              >
                Password
              </label>
              <div className="flex items-center mb-12 tracking-wide">
                <input
                  type={isPassVisible ? "text" : "password"}
                  className="w-full border-[3px] p-2 border-black rounded-md focus:outline-none uppercase font-bold text-sm placeholder:uppercase placeholder:text-xs placeholder:p-1 tracking-wide"
                  placeholder="password"
                />
                {isPassVisible ? (
                  <EyeOffIcon
                    onClick={toggleIsPassVisible}
                    className="h-5 w-5 -ml-8 cursor-pointer"
                  />
                ) : (
                  <EyeIcon
                    onClick={toggleIsPassVisible}
                    className="h-5 w-5 -ml-8 cursor-pointer"
                  />
                )}
              </div>
              <button className="flex border-[3px] p-3 text-center border-black rounded-md mx-auto">
                <ArrowNarrowRightIcon className="h-5 w-5 cursor-pointer" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
