import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { usePhoneList } from "../service/query/usePhonesList";
import { ProductCard } from "../components/productCard";

export const Home = () => {
  const { data: product } = usePhoneList();
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
      <div className="mx-auto px-[50px]">
        <div className="my-[50px] flex items-center justify-start gap-5">
          {currentProducts?.map((item) => (
            <ProductCard key={item.id} {...item} />
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
          "p-2 bg-red-300 rounded hover:bg-red-400 text-red-700"
        }
        nextLinkClassName={
          "p-2 bg-red-300 rounded hover:bg-red-400 text-red-700"
        }
        disabledClassName={"opacity-50 cursor-not-allowed"}
        activeClassName={"p-4 bg-blue-500 rounded text-white"}
        pageClassName={"p-3 bg-red-300 rounded hover:bg-red-400"}
        breakClassName={"p-2 bg-red-300 rounded"}
      />
    </div>
  );
};
