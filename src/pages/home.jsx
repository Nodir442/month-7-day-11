import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { usePhoneList } from "../service/query/usePhonesList";
import { ProductCard } from "../components/productCard";
import { CategoryCard } from "../components/categoryCard";
import { useCategoryList } from "../service/query/useCategoryList";
import { useAdsList } from "../service/query/useAdsList";
import { AdsComponent } from "../components/adsComponent";
import { Link } from "react-router-dom";
import { SimpleSlider } from "../components/slider";

const Home = () => {
  const { data: categories } = useCategoryList();
  const { data: product } = usePhoneList();
  const { data: ads } = useAdsList();
  const [currentPage, setCurrentPage] = useState(0);

  const productsPerPage = 6;
  const offset = currentPage * productsPerPage;
  const currentProducts = product?.slice(offset, offset + productsPerPage);
  const pageCount = Math.ceil(product?.length / productsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <div>
        <SimpleSlider />
      </div>
      <div className="mx-auto px-[50px]">
        <div className="my-[50px] flex items-center justify-center gap-5">
          {categories?.map((item) => (
            <Link to={`/single-category/${item.id}`} key={item.id}>
              {" "}
              <CategoryCard key={item.id} {...item} isLoading={item.isLoaded} />
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto my-[50px] px-[50px]">
        <h2 className="mb-6 text-2xl font-semibold">Смартфоны и планшеты</h2>
        <div className="flex items-center justify-center gap-5">
          {currentProducts?.map((item) => (
            <Link to={`/single-product/${item.id}`} key={item.id}>
              {" "}
              <ProductCard {...item} />
            </Link>
          ))}
        </div>
      </div>
      <ReactPaginate
        previousLabel={"Назад"}
        nextLabel={"Вперед"}
        pageCount={Math.ceil(product?.length / 6)}
        onPageChange={handlePageClick}
        containerClassName={"flex items-center justify-center my-8 space-x-4"}
        previousLinkClassName={
          "p-2 bg-slate-300 duration-200 rounded hover:bg-slate-400 text-slate-700"
        }
        nextLinkClassName={
          "p-2 bg-slate-300 duration-200 rounded hover:bg-slate-400 text-slate-700"
        }
        disabledClassName={"opacity-50 cursor-not-allowed"}
        activeClassName={"p-4 bg-blue-500 rounded text-white"}
        pageClassName={
          "p-3 bg-slate-300 rounded duration-200 hover:bg-slate-400"
        }
        breakClassName={"p-2 bg-slate-300 rounded"}
      />
      <div className="mb-8 bg-yellow px-10 py-9">
        <h2 className="mb-6 text-2xl font-semibold">Акции</h2>
        <div className="flex justify-between">
          {ads?.map((item) => (
            <AdsComponent key={item.id} {...item} />
          ))}{" "}
        </div>
      </div>
    </div>
  );
};
export default Home;
