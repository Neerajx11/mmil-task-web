import { useState } from "react";

import {
  ArrowNarrowRightIcon,
  DesktopComputerIcon,
  DeviceMobileIcon,
  EyeIcon,
  EyeOffIcon,
  GlobeAltIcon,
  MenuIcon,
  PencilIcon,
} from "@heroicons/react/outline";

import "./Login.css";

const Login = () => {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const toggleIsPassVisible = () => setIsPassVisible((prev) => !prev);

  const [showNav, setShowNav] = useState(false);
  const toggleIsNavVisible = () => setShowNav((prev) => !prev);

  return (
    <div className="flex min-h-screen justify-center md:justify-start relative">
      <div className="absolute left-0">
        <MenuIcon
          className="w-8 h-8 m-4 cursor-pointer"
          onClick={toggleIsNavVisible}
        />

        <div
          className={`${
            showNav ? "slideIn" : "slideOut"
          } navOpen absolute top-0 min-h-screen w-[350px] z-30`}
        >
          <div className={`bg-white w-[350px] min-h-screen`}>
            <MenuIcon
              className="p-4 w-16 h-16 cursor-pointer text-black z-20"
              onClick={toggleIsNavVisible}
            />
            <p className="border-y-2 border-gray-200 text-xl font-normal pl-5 bg-white hover:bg-slate-200 cursor-pointer p-3">
              Home
            </p>
            <p className="border-b-2 border-gray-200 text-xl font-normal pl-5 bg-white hover:bg-slate-200 cursor-pointer p-3">
              About
            </p>
            <p className="border-b-2 border-gray-200 text-xl font-normal pl-5 bg-white hover:bg-slate-200 cursor-pointer p-3">
              Contact Us
            </p>
            <p className="border-t-2 border-gray-200 absolute bottom-0 w-[350px] text-xl font-normal pl-5 bg-white hover:bg-slate-200 cursor-pointer p-3">
              Help
            </p>
          </div>
        </div>
        <div
          className={`${
            !showNav ? "hidden" : "block"
          } absolute z-10 top-0 left-0 bg-black/[0.2] w-screen min-h-screen cursor-pointer`}
          onClick={toggleIsNavVisible}
        ></div>
      </div>
      {/* Login background */}
      <div className="hidden bg-cyan-400 w-0 md:grid place-items-center md:w-6/12 xl:w-7/12 ">
        <div className="bg-white rounded-md p-4 grid place-items-center grid-cols-2">
          <div className="bg-red-500 w-[150px] h-[150px] m-2 grid place-items-center ease-in duration-200 cursor-pointer hover:scale-95">
            <GlobeAltIcon className="w-14 h-14 text-white" />
          </div>
          <div className="bg-green-500 w-[150px] h-[150px] m-2 grid place-items-center ease-in duration-200 cursor-pointer hover:scale-95">
            <DeviceMobileIcon className="w-14 h-14 text-white" />
          </div>
          <div className="bg-blue-500 w-[150px] h-[150px] m-2 grid place-items-center ease-in duration-200 cursor-pointer hover:scale-95">
            <DesktopComputerIcon className="w-14 h-14 text-white" />
          </div>
          <div className="bg-yellow-500 w-[150px] h-[150px] m-2 grid place-items-center ease-in duration-200 cursor-pointer hover:scale-95">
            <PencilIcon className="w-14 h-14 text-white" />
          </div>
        </div>
      </div>
      {/* Login Form */}
      <div className="flex flex-col justify-center mx-auto">
        {/* Login Heading */}
        <div className="mb-1">
          <p className="text-[40px] font-bold mb-2">Connect with MMIL</p>
          <p className="text-xl font-semibold mb-6 text-gray-500 tracking-wider">
            begin your journey...
          </p>
        </div>
        {/* Form */}
        <div className="w-full">
          <p className="text-2xl font-bold mb-6 py-2">Sign In</p>
          <form action="">
            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="uppercase font-extrabold text-xs mb-1 tracking-normal"
              >
                Username
              </label>
              <input
                type="text"
                className="flex w-100 mb-8 border-[3px] p-2 border-black rounded-md focus:outline-none font-medium text-md  placeholder:text-md placeholder:p-1 tracking-wide"
                placeholder="Enter your fullname"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="uppercase font-extrabold text-xs mb-1 tracking-normal"
              >
                Password
              </label>
              <div className="flex items-center mb-12">
                <input
                  type={isPassVisible ? "text" : "password"}
                  className="w-full border-[3px] p-2 border-black rounded-md focus:outline-none font-medium text-md placeholder:text-md placeholder:p-1 tracking-wide"
                  placeholder="Enter your password"
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
