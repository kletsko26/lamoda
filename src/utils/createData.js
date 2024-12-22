import { Chance } from "chance";
import { __COLORS__, __CATEGORIES__ } from "./constants";

export default function createData(count) {
  const chance = new Chance();
  return Array.from({ length: count }, () => ({
    id: chance.guid(),
    name: chance.word(),
    description: chance.sentence().toLowerCase(),
    color: __COLORS__[chance.integer({ min: 0, max: 5 })],
    category: __CATEGORIES__[chance.integer({ min: 0, max: 9 })],
    price: chance.integer({ min: 10, max: 9999 }),
    rating: chance.floating({ min: 0, max: 5, fixed: 1 }),
    imageUrl: `./images/boots/boot${chance.integer({ min: 1, max: 10 })}.jpg`,
  }));
}