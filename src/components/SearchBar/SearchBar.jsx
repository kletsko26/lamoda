import { useState } from "react";

import S from "./searchBar.module.scss";

const SearchBar = ({ setFilters }) => {
  const [searchbarText, setSearchbarText] = useState("");

  return (
    <div className={S.searchBar}>
      <div className={S.searchIconWrapper}>
        <span className={S.searchIcon} />
      </div>

      <input
        className={S.input}
        type="search"
        placeholder="Поиск"
        value={searchbarText}
        onChange={({ target }) => {
          setSearchbarText(target.value);
          setFilters((prev) => {
            const withoutSorters = prev.filter((item) => item.id !== "search");
            const newSearch = {
              id: "search",
              operationType: "filter",
              callback: ({ name, description }) =>
                `${name}${description}`
                  .toLowerCase()
                  .includes(target.value.toLowerCase()),
            };
            return [...withoutSorters, newSearch];
          });
        }}></input>
    </div>
  );
};

export default SearchBar;
