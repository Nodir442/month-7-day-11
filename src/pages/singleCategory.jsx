import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAllList } from "../service/query/useAllList";
import { CategoryCard } from "../components/categoryCard";
import { useCategoryList } from "../service/query/useCategoryList";

const SingleCategory = () => {
  const { id } = useParams();
  const { data: allList } = useAllList();
  const { data: categories } = useCategoryList();
  if (!allList) {
    return <div>Loading...</div>;
  }
  const category = allList.find((item) => item.id === Number(id));

  return (
    <div>
      <div className="w-full bg-silver py-4">
        <div className="mx-auto flex w-[80%] items-center justify-between">
          <h3 className="text-xl font-medium">Категории:</h3>
          {categories?.map((item) => (
            <Link to={`/single-category/${item.id}`} key={item.id}>
              {" "}
              <CategoryCard key={item.id} name={item.name} variant="nameOnly" />
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto my-[50px] px-[50px]">
        {" "}
        <h2 className="mb-6 text-2xl font-semibold">{category.text}</h2>
      </div>
    </div>
  );
};

export default SingleCategory;
