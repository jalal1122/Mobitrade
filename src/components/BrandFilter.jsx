import React from "react";

const BrandFilter = () => {
  const brands = [
    { name: "Apple", checked: true },
    { name: "Google" },
    { name: "Microsoft" },
    { name: "Samsung" },
    { name: "Dell" },
    { name: "Xiaomi" },
    { name: "Sony" },
    { name: "Nikkon" },
    { name: "One Plus" },
  ];

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <h3 className="font-semibold text-gray-900 mb-4">POPULAR BRANDS</h3>

      <div className="space-y-2">
        {brands.map((brand, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4"
              defaultChecked={brand.checked}
            />
            <span className="text-sm text-gray-700">{brand.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default BrandFilter;
