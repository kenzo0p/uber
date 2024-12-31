import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";

function CaptainRiding() {
    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef()

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );
  return (
    <div className="h-screen relative">
      <div className="flex items-center justify-between w-screen fixed p-6  top-0">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt=""
        />
        <Link
          to="/captain-home"
          className=" h-10 bg-white flex items-center justify-center w-10 rounded-full"
        >
          <i className="ri-logout-box-r-line text-lg font-medium"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-fit"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjgBWkh-2RpEXtRmA1vxakcVsTzG3XVMnd3Q&s"
          alt=""
        />
      </div>
      <div onClick={()=>{
        setFinishRidePanel(true)
      }} className="bg-yellow-400 flex items-center justify-between h-1/5 p-6 relative">
        <h5 className="p-1 text-center absolute top-0 w-[90%]">
          <i
            onClick={() => {}}
            className="ri-arrow-up-wide-line text-3xl text-gray-300"
          ></i>
        </h5>
        <h4 className="text-xl font-semibold">4 KM Away</h4>
        <button className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed w-full h-screen translate-y-full z-10 bg-white  px-3 py-10 pt-12 bottom-0"
      >
        <FinishRide
          setFinishRidePanel={setFinishRidePanel}
        />
      </div>
    </div>
  );
}

export default CaptainRiding;
