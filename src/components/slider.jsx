import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from "@tanstack/react-query";
import { request } from "../config/request";

const fetchBanners = async () => {
  const { data } = await request.get("/banners");
  return data;
};

export const SimpleSlider = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["banners"],
    queryFn: fetchBanners,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading banners</div>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container mx-auto w-[96%]">
      <Slider {...settings}>
        {data.map((banner) => (
          <div key={banner.id}>
            <img
              className="w-screen"
              src={banner.img}
              alt={`Banner ${banner.id}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
