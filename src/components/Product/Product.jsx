import S from "./product.module.scss";

const Product = ({
  name,
  description,
  color,
  category,
  price,
  rating,
  imageUrl,
}) => {
  const addInformation = [
    { data: category, title: "Категория" },
    { data: price, title: "Цена" },
    { data: rating, title: "Рэйтинг" },
    { data: color.title, title: "Цвет" },
  ];

  return (
    <div className={S.itemWrapper}>
      <div className={S.image}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={S.text}>
        <div className={S.name}>{name}</div>
        <p className={S.description}>{description}</p>
        {addInformation.map(({ data, title }, i) => (
          <div className={S.info} key={i}>
            <b>{title}</b> {data}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
