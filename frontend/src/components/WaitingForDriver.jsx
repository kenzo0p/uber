import React from "react";

function WaitingForDriver(props) {
  return (
    <div>
      <h5 className="p-1 text-center absolute top-0 w-[93%]">
        <i
          onClick={() => props.waitingForDriver(false)}
          className="ri-arrow-down-wide-line text-3xl text-gray-300"
        ></i>
      </h5>
      <div className="flex items-center justify-between">
      <img
          className="h-12"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutqrpU7mZAsnEklifsm4OMwu5qL02rlV0bw&s"
          alt=""
        />
        <div className="text-right ">
          <h2 className="text-lg font-medium">
            Om 
          </h2>
          <h4 className="text-xl -mt-1 -mb-1 font-semibold">MH12 df 2332</h4>
          <p className="font-sm text-gray-600">Maruti suzuki alto</p>
        </div>
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
      </div>
    </div>
  );
}

export default WaitingForDriver;