import React from "react";

function Actions() {
  return (
    <div className="actions flex space-x-8 mt-4">
      <button className="text-sm uppercase">Back</button>
      <button className="bg-gray-500  px-4 py-1 text-sm uppercase text-gray-100 font-semibold rounded-sm hover:bg-gray-600">
        Apply
      </button>
      <a
        className="text-xs self-center underline font-bold text-green-600"
        href="/"
      >
        Learn More
      </a>
    </div>
  );
}

export default Actions;
