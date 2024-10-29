import React from "react";
import Img3 from "../../assets/website/team.png";

const Hero = () => {
  return (
    <div
      className="container relative h-screen  dark:text-red-100 "
      style={{ backgroundImage: `url(${Img3})`, backgroundSize: "cover" }}
    >
      {/* id="hero" className="bg-gray-950 dark:text-white duration-300 " */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center "></div>
      <div className="container min-h-[620px] justify-center item-center flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}

          {/* Text section */}
          <div className="space-y-5 order-2 mr-4 sm:order-1 xl:pr-40 ">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              <span className="text-white font">Tanks Technology</span>
            </h1>
            <p className=" text-white" data-aos="fade-up" data-aos-delay="300 ">
              Your partner in navigating the ever-evolving landscape of digital
              marketing. From conceptualization to execution, we craft tailored
              solutions that drive results and elevate your brand to new
              heights.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="primary-btn"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
