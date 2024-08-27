import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const CategoryCard = ({ name, img, variant = "default", isLoading }) => {
  return (
    <div
      className={`flex cursor-pointer items-center gap-4 rounded-xl bg-slate-200 px-4 py-[14px] duration-300 hover:rounded-3xl hover:bg-slate-300 hover:shadow-2xl ${
        variant === "nameOnly" ? "justify-center" : ""
      }`}
    >
      {isLoading ? (
        <>
          <Skeleton circle={true} height={90} width={90} />
          <Skeleton width={80} />
        </>
      ) : (
        <>
          {variant === "default" && (
            <img className="w-24" src={img} alt="Category Img" />
          )}
          <p className="text-base font-medium">{name}</p>
        </>
      )}
    </div>
  );
};
