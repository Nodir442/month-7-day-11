import React from "react";
import { LogoIcon } from "../icons/logoIcon";
import { Link, Outlet } from "react-router-dom";
import { MenuIcon } from "../icons/menuIcon";
import { Search } from "../components/search";
import { UserIcon } from "../icons/userLogo";
import { LikeIcon } from "../icons/likeIcon";
import { CartIcon } from "../icons/cartIcon";
import { SimpleSlider } from "../components/slider";
export const MainLayout = () => {
  return (
    <>
      <div className="flex w-full items-center justify-end gap-6 px-[60px] py-3">
        <a href="#" className="text-base font-normal">
          Доставка и оплата
        </a>
        <a href="#" className="text-base font-normal">
          Пункты выдачи
        </a>
        <a href="#" className="text-base font-normal">
          Поддержка
        </a>
        <strong>+998 90 253 77 53</strong>
      </div>
      <div className="flex w-full items-center gap-8 px-10 py-5">
        <Link to={"/"}>
          <LogoIcon />
        </Link>
        <button className="flex gap-3 bg-yellow p-3 text-xl">
          <MenuIcon /> Каталог
        </button>
        <Search />
        <div className="ml-auto mr-0 flex gap-8">
          <div className="grid w-16 gap-1 text-center">
            {" "}
            <div className="mx-auto">
              {" "}
              <UserIcon />{" "}
            </div>{" "}
            <p>Войти</p>
          </div>
          <div className="grid w-20 gap-1 text-center">
            {" "}
            <div className="mx-auto">
              {" "}
              <LikeIcon />{" "}
            </div>{" "}
            <p>Избранное</p>
          </div>
          <div className="grid w-16 gap-1 text-center">
            {" "}
            <div className="mx-auto">
              {" "}
              <CartIcon />{" "}
            </div>{" "}
            <p>Войти</p>
          </div>
        </div>
      </div>
      <div>
        <SimpleSlider />
      </div>
      <Outlet/>
    </>
  );
};
