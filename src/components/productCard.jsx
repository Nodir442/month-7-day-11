import React from "react";
export const ProductCard = ({ img, title, brand, color,price }) => {
  return (
    <div className="cursor-pointer p-5">
      <img className="mb-4 w-[165px]" src={img} alt="Product Img" />
      <div className="grid">
        <p className="text-base font-normal">{brand}</p>
        <p className="text-base font-normal">{title}</p>
        <p className="text-base font-normal">{color}</p>
        <strong className="mt-4">{price} Сум</strong>
      </div>
    </div>
  );
};
