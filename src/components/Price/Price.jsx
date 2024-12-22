import { useEffect, useState } from "react";
import S from "./price.module.scss";

const Price = ({ setFilters }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  useEffect(() => {
    setFilters((prev) => {
      const isEmpty = to.length === 0 && from.length === 0;
      return [
        ...prev.filter((item) => item.id !== "price"),
        {
          id: "price",
          title: "По цене",
          operationType: "filter",
          callback: isEmpty
            ? () => true
            : ({ price }) => price >= from && price <= to,
        },
      ];
    });
  }, [from, to, setFilters]);

  return (
    <>
      <div className={S.box}>По цене</div>
      <div className={S.asideWrapper}>
        <div className={S.priceContainer}>
          <input
            className={`${S.box} ${S.priceInput}`}
            type="number"
            placeholder="0"
            value={from}
            onChange={({ target }) => setFrom(target.value)}
          />
          <span className={S.divider} />
          <input
            className={`${S.box} ${S.priceInput}`}
            type="number"
            placeholder="9999"
            value={to}
            onChange={({ target }) => setTo(target.value)}
          />
        </div>
      </div>
    </>
  );
};
export default Price;
