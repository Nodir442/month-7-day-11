import React from "react";
export const CategoryCard = ({ name, img }) => {
  return (
    <>
      <div className="flex items-center gap-4 rounded-xl bg-slate-200 px-4 py-[14px] duration-300 hover:rounded-3xl hover:bg-slate-300 hover:shadow-2xl">
        <img className="w-24" src={img} alt="Category Img" />
        <p className="text-base font-medium">{name}</p>
      </div>
    </>
  );
};
