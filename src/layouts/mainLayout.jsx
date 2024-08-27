import React from "react";
import { LogoIcon } from "../icons/logoIcon";
import { Link, Outlet } from "react-router-dom";
import { MenuIcon } from "../icons/menuIcon";
import { Search } from "../components/search";
import { UserIcon } from "../icons/userLogo";
import { LikeIcon } from "../icons/likeIcon";
import { CartIcon } from "../icons/cartIcon";
import { SimpleSlider } from "../components/slider";
import { FacebookIcon } from "../icons/facebookIcon";
import { OkIcon } from "../icons/okIcon";
import { VkIcon } from "../icons/vkIcon";
import { YouTubeIcon } from "../icons/youTubeIcon";
import { InstagramIcon } from "../icons/instagramIcon";
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
          <LogoIcon width={140} height={50} />
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
      
      <Outlet />
      <footer className="bg-silver flex p-10">
        <div className="mr-[188px] flex flex-col">
          <Link className="w-full" to={"/"}>
            <LogoIcon width={112} height={63} />
          </Link>
          <div className="mb-3 mt-4">
            <p className="cursor-pointer text-xl font-medium">
              +99 893 374-66-44
            </p>
            <p className="mt-[2px] text-sm font-normal"> справочная служба</p>{" "}
          </div>
          <div className="mb-4">
            <p className="cursor-pointer text-xl font-medium">
              +99 893 374-66-44
            </p>
            <p className="mt-[2px] text-sm font-normal"> интернет-магазин</p>{" "}
          </div>
          <div>
            <p className="mb-2 text-sm font-medium">Оставайтесь на связи</p>
            <div className="flex gap-3">
              <FacebookIcon />
              <OkIcon />
              <VkIcon />
              <YouTubeIcon />
              <InstagramIcon />
            </div>{" "}
          </div>
        </div>
        <div className="mr-[125px] flex flex-col gap-4">
          <p>Условия обмена и возврата</p>
          <p>Каталог</p>
          <p>О компании</p>
          <p>Контакты</p>
          <p>Доставка</p>
          <p>Оплата</p>
        </div>
        <div className="mr-[105px] flex flex-col gap-4">
          <p>Клиентам</p>
          <p>Личный кабинет</p>
          <p>Блог</p>
          <p>Обратная связь</p>
        </div>
        <div className="flex flex-col gap-4">
          <p>Информация</p>
          <p>Пользовательское соглашение</p>
          <p>Политика конфиденциальности и оферта</p>
        </div>
      </footer>{" "}
    </>
  );
};
