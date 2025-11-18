import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
        <ChevronLeft size={20} />
      </button>

      <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-medium">
        01
      </button>
      <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors font-medium">
        02
      </button>
      <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors font-medium">
        03
      </button>
      <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors font-medium">
        04
      </button>
      <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors font-medium">
        05
      </button>
      <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors font-medium">
        06
      </button>

      <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
