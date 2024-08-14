import React from "react";
import { SearchIcon } from "../icons/searchIcon";

export const Search = () => {
  return (
    <div className="flex w-[675px] items-center border-2 border-slate-500 p-4">
      <input
        className="ml-2 flex-1 focus:outline-none"
        type="text"
        placeholder="Поиск"
      />
      <SearchIcon />
    </div>
  );
};
