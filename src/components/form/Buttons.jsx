import { Loader } from "lucide-react";
import React from "react";

function Buttons({ isSubmitting, label }) {
  return (
    <button
      disabled={isSubmitting}
      className="bg-black p-2 rounded-md text-white hover:bg-gray-500 hover:scale-105 hover:cursor-pointer"
    >
      {isSubmitting ? (
        <div className="flex gap-2">
          <Loader className="animate-spin" />
          <p>Loading</p>
        </div>
      ) : (
        label
      )}
    </button>
  );
}

export default Buttons;
