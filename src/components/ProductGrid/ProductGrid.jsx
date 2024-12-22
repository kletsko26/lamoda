import S from "./productGrid.module.scss";

import Product from "@components/Product/Product";

const ProductGrid = ({ data }) => {
  return (
    <div className={S.grid}>
      {data.map(
        (itemData) => (
          <Product key={itemData.id} {...itemData}/>
        )
      )}
    </div>
  );
};

export default ProductGrid;
