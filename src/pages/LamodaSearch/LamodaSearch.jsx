import { useState, useEffect } from "react";
import createData from "@utils/createData";

import SearchBar from "@components/SearchBar/SearchBar";
import SortButtons from "@components/SortButtons/SortButtons";
import ColorsSection from "@components/ColorsSection/ColorsSection";
import Price from "@components/Price/Price";
import TotalAmount from "@components/TotalAmount/TotalAmount";
import ProductGrid from "@components/ProductGrid/ProductGrid";

import { __ITEMS_AMOUNT__ } from "@utils/constants";

import S from "./lamodaSearch.module.scss";

const LamodaSearch = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setData(createData(__ITEMS_AMOUNT__));
  }, []);

  const filterData = (data) => {
    if (data.length === 0) return [];
    let dataCopy = structuredClone(data);

    filters.forEach(({ operationType, callback }) => {
      dataCopy = dataCopy[operationType](callback);
    });

    return dataCopy;
  };

  const filteredData = filterData(data);

  return (
    <div className={S.grid}>
      <header className={S.header}>
        <SearchBar setFilters={setFilters} />
        <SortButtons setFilters={setFilters} />
      </header>

      <aside className={S.aside}>
        <ColorsSection setFilters={setFilters} />
        <Price setFilters={setFilters} />
        <TotalAmount totalAmount={filteredData.length} />
      </aside>

      <main className={S.main}>
        <ProductGrid data={filteredData} />
      </main>
    </div>
  );
};

export default LamodaSearch;
