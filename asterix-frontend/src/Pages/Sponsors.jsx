import Logo_gcoej from "../images/logo-gcoej.png";
import Burnout from "../images/Burnout by 3 Brothers.webp";
import Ansys from "../images/ANSS_BIG-4e994f5d.png";
import Solidworks from "../images/solidworks.svg";
import Fox_Float from "../images/Fox.png";
import DWT from "../images/DWT.jpg";

export default function Sponsors() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32 flex justify-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-center text-lg font-bold text-lime-800 font-serif">
            Our Sponsors
          </h1>
          <div className="relative w-full overflow-hidden py-10">
            <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none animate-scroll">
              <div className="">
                <a
                  href="https://www.gcoej.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="gcoej_logo"
                    src={Logo_gcoej}
                    width={158}
                    height={48}
                    className="col-span-2 max-h-12 w-full object-contain rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-lg lg:col-span-1"
                  />
                </a>
              </div>
              <div className="">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <img
                    alt="Burnout"
                    src={Burnout}
                    width={158}
                    height={48}
                    className="col-span-2 max-h-12 w-full object-contain rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-lg lg:col-span-1"
                  />
                </a>
              </div>
              <div className="">
                <a
                  href="https://www.ansys.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="Ansys"
                    src={Ansys}
                    width={158}
                    height={48}
                    className="col-span-2 max-h-12 w-full object-contain rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-lg lg:col-span-1"
                  />
                </a>
              </div>
              <div className="">
                <a
                  href="
https://www.solidworks.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="Solidworks"
                    src={Solidworks}
                    width={158}
                    height={48}
                    className="col-span-2 max-h-12 w-full object-contain rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-lg lg:col-span-1"
                  />
                </a>
              </div>
              <div className="">
                <a
                  href="https://www.gcoej.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="Fox_Float"
                    src={Fox_Float}
                    width={158}
                    height={48}
                    className="col-span-2 max-h-12 w-full object-contain rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-lg lg:col-span-1"
                  />
                </a>
              </div>
              <div className="">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <img
                    alt="DWT"
                    src={DWT}
                    width={158}
                    height={48}
                    className="col-span-2 max-h-12 w-full object-contain rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-lg lg:col-span-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
