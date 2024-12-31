import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePop from "../components/RidePop";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePop from "../components/ConfirmRidePop";

function CaptainHome() {
  const [ridePopupPanel, setRidePopupPanel] = useState(false);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);
  const ridePopupPanelRef = useRef();
  const confirmRidePopupPanelRef = useRef();
 
  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopupPanel]
  );
  useGSAP(
    function () {
      if (confirmRidePopupPanel) {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopupPanel]
  );
  return (
    <div className="h-screen">
      <div className="flex items-center justify-between w-screen fixed p-6  top-0">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt=""
        />
        <Link
          to="/"
          className=" h-10 bg-white flex items-center justify-center w-10 rounded-full"
        >
          <i className="ri-logout-box-r-line text-lg font-medium"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="h-full w-full object-fit"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjgBWkh-2RpEXtRmA1vxakcVsTzG3XVMnd3Q&s"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      <div
        ref={ridePopupPanelRef}
        className="fixed w-full translate-y-full z-10 bg-white  px-3 py-10 pt-12 bottom-0"
      >
        <RidePop setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
      </div>
      <div
        ref={confirmRidePopupPanelRef}
        className="fixed w-full h-screen translate-y-full z-10 bg-white  px-3 py-10 pt-12 bottom-0"
      >
        <ConfirmRidePop setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel}  />
      </div>
    </div>
  );
}
export default CaptainHome;