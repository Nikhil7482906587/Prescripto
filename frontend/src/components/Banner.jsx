import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-blue-600 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-10 md:mx-10">
      {/* Left side */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          <p>Book Appointment</p>
          <p className="mt-4">With 100+ Trusted Doctors</p>
          <button
            onClick={() => {
              navigate("/login");
              scrollTo(0, 0);
            }}
            className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all"
          >
            Create account
          </button>
        </div>
      </div>
      {/* Right side */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          className="w-full absolute border-0 right-0 max-w-md"
          src={assets.appointment_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
