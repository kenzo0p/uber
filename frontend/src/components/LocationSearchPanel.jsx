import React from "react";

function LocationSearchPanel(props) {

  const locations = [
    "123 Main St, Springfield, IL 62701, USA",
    "456 Elm St, Metropolis, IL 62960, USA",
    "789 Oak St, Smallville, KS 66002, USA",
    "101 Maple St, Gotham, NY 10001, USA",
  ];

  return (
    
    <div className="flex flex-col gap-4">
        {locations.map((location ,index) => (
            <div onClick={() => {
              props.setVehiclePanelOpen(true)
              props.setPanelOpen(false)
              }} key={index} className="flex gap-4 items-center justify-start  border-2 p-3 rounded-xl my-2 border-gray-100 active:border-black">
            <h2 className="bg-[#eee] h-10 flex items-center justify-center w-10 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">
              {location}
            </h4>
          </div>
        ) )}
      
    </div>
  );
}

export default LocationSearchPanel;
