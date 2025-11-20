import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const specifications = [
    { label: "Dimensions", value: "71.5 x 146.7 x 7.8 mm" },
    { label: "Battery", value: "3279 mAh" },
    { label: "Connections", value: "Lightning" },
    { label: "RAM size", value: "6.0 GB" },
    { label: "operating system", value: "iOS" },
    { label: "Screen resolution", value: "2532 x 1170" },
    { label: "Screen size", value: '6.1 "' },
    { label: "Display", value: "OLED, HDR10" },
    { label: "Year of publication", value: "2022" },
    { label: "Color", value: "black" },
    { label: "Processor", value: "A16 Bionic" },
    { label: "Storage", value: "128GB" },
    { label: "Camera", value: "48MP + 12MP + 12MP" },
    { label: "Weight", value: "206g" },
  ];

  return (
    <div className="mt-12">
      {/* Tabs Header */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-6 py-4 text-base font-medium transition-colors relative ${
            activeTab === "description"
              ? "text-gray-900"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Description
          {activeTab === "description" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
          )}
        </button>
        <button
          onClick={() => setActiveTab("features")}
          className={`px-6 py-4 text-base font-medium transition-colors relative ${
            activeTab === "features"
              ? "text-gray-900"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Features
          {activeTab === "features" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
          )}
        </button>
        <button
          onClick={() => setActiveTab("specifications")}
          className={`px-6 py-4 text-base font-medium transition-colors relative ${
            activeTab === "specifications"
              ? "text-gray-900"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Specifications
          {activeTab === "specifications" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
          )}
        </button>
      </div>

      {/* Tabs Content */}
      <div className="py-8">
        {activeTab === "description" && (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Description Text */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  Description
                </h2>
                <button
                  onClick={() =>
                    setIsDescriptionExpanded(!isDescriptionExpanded)
                  }
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  {isDescriptionExpanded ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </button>
              </div>

              {isDescriptionExpanded && (
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <h3 className="text-xl font-bold text-gray-900">
                    The refurbished products
                  </h3>
                  <p>
                    Refurbished products are more sustainable and up to 40%
                    cheaper than buying new. Our electronic devices are
                    completely refurbished and meticulously tested. This makes
                    them superior to, for example, used cell phones or kitchen
                    appliances. We also offer new products such as sustainable
                    phone cases. Furthermore, you receive at least a 12-month
                    warranty and can try them free for 30 days.
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 pt-4">
                    iPhone 14 - Description
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-900">
                    The iPhone 14 – Innovation meets performance
                  </h4>
                  <p>
                    The iPhone 14 sets new standards in technology and design.
                    Apple has succeeded in exceeding user expectations with
                    this...
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Show more
                  </button>
                </div>
              )}
            </div>

            {/* Specifications Table */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Specifications
              </h2>
              <div className="bg-gray-50 rounded-lg border border-gray-200 max-h-[500px] overflow-y-auto">
                <table className="w-full">
                  <tbody>
                    {specifications.map((spec, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 border-b border-gray-200">
                          {spec.label}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 text-right border-b border-gray-200">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "features" && (
          <div className="text-gray-700">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Features</h3>
            <p>Product features content goes here...</p>
          </div>
        )}

        {activeTab === "specifications" && (
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Full Specifications
            </h3>
            <div className="bg-gray-50 rounded-lg border border-gray-200 max-h-[500px] overflow-y-auto">
              <table className="w-full">
                <tbody>
                  {specifications.map((spec, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 border-b border-gray-200">
                        {spec.label}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 text-right border-b border-gray-200">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
