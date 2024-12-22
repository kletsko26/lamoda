import { useState } from "react";
import { __SORTERS__ } from "@utils/constants";
import S from "./sortButtons.module.scss";

const SortButtons = ({ setFilters }) => {
  const [selectedFilter, setSelectedFilter] = useState("");

  return (
    <ul className={S.buttonsWrapper}>
      {__SORTERS__.map(({ id, title }) => (
        <li key={id} className={S.checkboxButton}>
          <input
            type="radio"
            id={id}
            name={id}
            value={id}
            checked={selectedFilter === id}
            onChange={({ target }) => {
              setFilters((prev) => {
                const withoutSorters = prev.filter(
                  (item) => item.group !== "sorter"
                );
                const newSorter = __SORTERS__.find(
                  (item) => item.id === target.value
                );
                return [...withoutSorters, newSorter];
              });
              setSelectedFilter((prev) => {
                if (prev === target.value) {
                  return "";
                } else {
                  return target.value;
                }
              });
            }}
          />
          <label htmlFor={id}>{title}</label>
        </li>
      ))}
    </ul>
  );
};

export default SortButtons;
