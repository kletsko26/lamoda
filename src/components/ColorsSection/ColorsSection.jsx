import { useState } from "react";
import { __COLORS__ } from "@utils/constants";
import S from "./colorsSection.module.scss";

const ColorsSection = ({ setFilters }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilter = (newData) => {
    setFilters((prev) => {
      const withoutColors = prev.filter((item) => item.id !== "color");
      if (newData.length === 0) {
        return [...withoutColors];
      }
      const newColors = {
        id: "color",
        operationType: "filter",
        callback: ({ color }) => newData.includes(color.name),
      };
      return [...withoutColors, newColors];
    });
  };

  return (
    <>
      <div className={S.box}>По цвету</div>
      <ul className={S.asideWrapper}>
        {__COLORS__.map(({ name, title }, i) => {
          return (
            <li key={i} className={S.colorContainer}>
              <input
                type="checkbox"
                id={name}
                name={name}
                value={name}
                checked={selectedFilters.includes(name)}
                onChange={({ target }) => {
                  if (target.checked) {
                    const newData = [...selectedFilters, target.value];
                    setSelectedFilters(newData);
                    handleFilter(newData);
                  } else {
                    const newData = selectedFilters.filter(
                      (filter) => filter !== target.value
                    );
                    setSelectedFilters(newData);
                    handleFilter(newData);
                  }
                }}
              />
              <label htmlFor={name}>{title}</label>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default ColorsSection;
