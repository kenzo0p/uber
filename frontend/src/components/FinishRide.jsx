import React from "react";
import { Link } from "react-router-dom";
function FinishRide(props) {
  return (
    <div>
      <h5 className="p-1 text-center absolute top-0 w-[93%]">
        <i
          onClick={() => {
            props.setFinishRidePanel(false);
          }}
          className="ri-arrow-down-wide-line text-3xl text-gray-300"
        ></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Confirm This Ride To Start
      </h3>
      <div className="flex items-center justify-between border-2 border-yellow-400 p-4 rounded-lg mt-4 ">
        <div className="flex items-center gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover "
            src="https://preview.redd.it/created-random-people-using-chatgpt-midjourney-do-you-know-v0-xc8pg40i5dqb1.png?width=640&crop=smart&auto=webp&s=4029ddd24fbe7e577359e7e6d1f0c49bec2b4856"
            alt=""
          />
          <h2 className="text-lg font-medium">Harshi patelia</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="flex flex-col gap-2 justify-between items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="text-sm -mt-1 text-gray-600">
                Lorem ipsum dolor sit amet.India
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="text-sm -mt-1 text-gray-600">
                Lorem ipsum dolor sit amet.India
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
        <form></form>
        <div className="mt-10 w-full">
          <Link
            to="/captain-home"
            className="w-full flex justify-center mt-5 bg-green-600 text-white text-lg font-semibold p-3 rounded-lg"
          >
            Finish
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FinishRide;
