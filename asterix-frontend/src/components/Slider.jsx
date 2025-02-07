import React from "react";
import img1 from "../images/shutter-tales-RjjXYzcxigE-unsplash.jpg";
import img2 from "../images/img2.jpg";
import video1 from "../images/video1.mp4";
import img3 from "../images/Dark version.png";
import img4 from "../images/Mini_Baja_2004_Midwest_Testing.jpg";

const Slider = () => {
  return (
    <section className="mt-4">
      <div className="relative w-full max-w-7.5xl mx-auto overflow-hidden shadow-lg">
        {/* Slides */}
        <div className="relative flex overflow-x-scroll snap-x snap-mandatory scroll-smooth">
          {/* Slide 1 */}
          <div className="snap-center flex-shrink-0 w-full h-[300px] md:h-[500px] relative">
            <img src={img1} className="w-full h-full object-cover" />
          </div>

          {/* Slide 2 */}
          <div className="snap-center flex-shrink-0 w-full h-[300px] md:h-[500px] relative">
            <img
              src={img2}
              alt="Slide 2"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Slide 3 */}
          <div className="snap-center flex-shrink-0 w-full h-[300px] md:h-[500px] relative">
            <img
              src={img3}
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Slide 4 */}
          <div className="snap-center flex-shrink-0 w-full h-[300px] md:h-[500px] relative">
            <video className="w-full h-[1080px] rounded-lg shadow-lg" controls>
              <source src={video1} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <button
            className="w-3 h-3 bg-gray-300 rounded-full hover:bg-blue-500"
            aria-label="Slide 1"
          ></button>
          <button
            className="w-3 h-3 bg-gray-300 rounded-full hover:bg-blue-500"
            aria-label="Slide 2"
          ></button>
          <button
            className="w-3 h-3 bg-gray-300 rounded-full hover:bg-blue-500"
            aria-label="Slide 3"
          ></button>
          <button
            className="w-3 h-3 bg-gray-300 rounded-full hover:bg-blue-500"
            aria-label="Slide 4"
          ></button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
