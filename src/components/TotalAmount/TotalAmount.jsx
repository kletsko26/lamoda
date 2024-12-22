const TotalAmount = ({ totalAmount }) => {
  return totalAmount && totalAmount > 0 ? (
    <div>Всего продуктов: {totalAmount}</div>
  ) : (
    <div>Ничего не найдено</div>
  );
};

export default TotalAmount;
