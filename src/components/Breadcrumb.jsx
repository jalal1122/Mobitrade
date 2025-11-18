import React from "react";
import { ChevronRight } from "lucide-react";

const Breadcrumb = () => {
  return (
    <div className="bg-gray-100 py-3">
      <div className="max-w-[90%] mx-auto px-4">
        <div className="flex items-center gap-2 text-sm">
          <a href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-gray-900 font-medium">Mobile Phones</span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
