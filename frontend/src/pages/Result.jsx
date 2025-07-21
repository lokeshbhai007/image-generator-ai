import React, { useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_2);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (input) {
      if (image) {
        setIsImageLoaded(true);
        setImage(image);
      }
    }
    setLoading(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={onSubmitHandler}
      className="flex flex-col min-h-[90vh] justify-center items-center px-4"
    >
      <div className="text-center w-full">
        <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <img src={image} alt="" className="w-full rounded-xl shadow-lg" />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-pink-600 ${
              loading ? "w-full transition-all duration-[10s]" : "w-0"
            }`}
          />
        </div>
        <p className={`mt-4 text-sm text-gray-300 ${!loading && "hidden"}`}>
          Generating...
        </p>
      </div>

      {!isImageLoaded && (
        <div className="flex flex-col sm:flex-row w-full max-w-xl bg-neutral-800 text-white text-base p-2 mt-4 rounded-2xl shadow-lg gap-2 sm:gap-0">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe your idea, and our AI will generate it!"
            className="flex-1 bg-transparent outline-none px-4 py-3 placeholder:text-gray-400 text-sm sm:text-base"
          />
          <button
            type="submit"
            className="bg-pink-700 hover:bg-pink-800 px-6 py-3 rounded-xl font-semibold transition text-sm sm:text-base cursor-pointer"
          >
            Generate
          </button>
        </div>
      )}

      {isImageLoaded && (
        <div className="flex flex-wrap justify-center gap-4 text-white text-sm p-0.5 mt-10">
          <p
            onClick={() => setIsImageLoaded(false)}
            className="border border-gray-600 bg-purple-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full cursor-pointer hover:bg-gray-800 transition duration-200"
          >
            Generate Another
          </p>
          <a
            href={image}
            download
            className="bg-green-600 px-10 py-3 rounded-full cursor-pointer hover:bg-green-700 transition-all duration-200" 
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  );
};

export default Result;
