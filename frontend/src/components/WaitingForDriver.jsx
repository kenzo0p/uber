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
  
    </div>
  );
}

export default WaitingForDriver;
