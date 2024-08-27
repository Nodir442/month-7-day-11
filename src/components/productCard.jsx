import React from "react";
export const ProductCard = ({ img, title, brand, color, price }) => {
  return (
    <div className="cursor-pointer rounded-xl bg-slate-200 p-5 duration-300 hover:rounded-3xl hover:bg-slate-300 hover:shadow-2xl">
      <img className="mb-4 w-[180px] rounded-xl" src={img} alt="Product Img" />
      <div className="grid">
        <p className="text-base font-normal">{brand}</p>
        <p className="text-base font-normal">{title}</p>
        <p className="text-base font-normal">{color}</p>
        <strong className="mt-4">{price} Сум</strong>
      </div>
    </div>
  );
};
