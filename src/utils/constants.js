export const __CATEGORIES__ = ["boots", "flats", "clogs", "loafers", "moccasins", "sneakers", "slippers", "sandals", "heels", "mules"];

export const __COLORS__ = [
  {
    name: "black",
    title: "Чёрный"
  },
  {
    name: "red",
    title: "Красный"
  },
  {
    name: "white",
    title: "Белый"
  },
  {
    name: "blue",
    title: "Синий"
  },
  {
    name: "beige",
    title: "Бежевый"
  },
  {
    name: "brown",
    title: "Коричневый"
  }];

export const __SORTERS__ = [
  {
    id: "cheap",
    group: "sorter",
    title: "Сначала дешевые",
    operationType: "sort",
    callback: (a, b) => a.price - b.price,
  },
  {
    id: "expensive",
    group: "sorter",
    title: "Сначала дорогие",
    operationType: "sort",
    callback: (a, b) => b.price - a.price,
  },
  {
    id: "popular",
    group: "sorter",
    title: "Сначала популярные",
    operationType: "sort",
    callback: (a, b) => b.rating - a.rating,
  },
  {
    id: "without",
    group: "sorter",
    title: "Без сортировки",
    operationType: "sort",
    callback: () => {},
  },
];

export const __ITEMS_AMOUNT__ = 150;