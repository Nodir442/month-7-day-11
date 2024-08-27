import React from "react";
import { useParams } from "react-router-dom";
import { useAllList } from "../service/query/useAllList";
import { useCategoryList } from "../service/query/useCategoryList";
import { CategoryCard } from "../components/categoryCard";

const SingleProduct = () => {
  const { id } = useParams();
  const { data: allList } = useAllList();
  const { data: categories } = useCategoryList();

  if (!allList) {
    return <div>Loading...</div>;
  }

  const product = allList.find((item) => item.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="w-full bg-silver py-4">
        <div className="mx-auto flex w-[80%] items-center justify-between">
          <h3 className="text-xl font-medium">Категории:</h3>
          {categories?.map((item) => (
            <CategoryCard key={item.id} name={item.name} variant="nameOnly" />
          ))}
        </div>
      </div>
      <div className="p-10">
        <h3 className="text-2xl">
          Товар: <strong className="font-semibold">{product.title}</strong>
        </h3>
        <div className="flex p-6">
          <img className="w-[435px]" src={product.img} alt="Product Img" />
          <div className="mr-[200px] flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h4 className="font-medium">Объём памяти:</h4>
              <p className="text-xl font-semibold">{product.rame}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium">Цвет:</h4>
              <p className="text-xl font-semibold">{product.color}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium">Бренд:</h4>
              <p className="text-xl font-semibold">{product.brand}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-3xl">
              Цена: <strong>{product.price}</strong>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleProduct;
