import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="w-100vw h-20 flex items-center justify-between">
      {/* logo image and link add*/}
      <motion.div
        initial={{ opacity: 0, x:-20 }}
        animate={{ opacity: 1, x:0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Link to={"/"} className="">
          <img
            src={assets?.logo}
            alt="logo-image"
            className="w-28 sm:w-32 lg:w-40"
          />
        </Link>
      </motion.div>

      {/* login and button */}
      <div className="flex items-center gap-2 sm:gap-3">
        <Button className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700">
          <img className="w-5" src={assets.credit_star} alt="" />
          <p className="text-xs sm:text-sm font-medium text-gray-600">
            {/* Credits left : {credit}  */}Credits left :
          </p>
        </Button>

        <div className="flex items-center gap-4">
          <p className="text-gray-600 max-sm:hidden pl-4">Hi, Lokesh</p>

          <div className="relative group">
            <img
              src={assets.profile_icon}
              className="w-10 drop-shadow"
              alt=""
            />
            <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12 cursor-pointer">
              <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                <li className="py-1 px-2 cursor-pointer pr-10">Logout</li>
              </ul>
            </div>
          </div>
        </div>

      </div>


    </div>
  );
}

export default Navbar;
