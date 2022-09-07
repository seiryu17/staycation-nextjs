import IItem from "../model/item";

const MOST_PICKED = [
  {
    id: 1,
    name: "Blue Origin Fams",
    place: "Jakarta, Indonesia",
    price: 50,
    img: "/most-picked-1.png",
  },
  {
    id: 2,
    name: "Ocean Land",
    place: "Bandung, Indonesia",
    price: 22,
    img: "/most-picked-2.png",
  },
  {
    id: 3,
    name: "Stark House",
    place: "Malang, Indonesia",
    price: 856,
    img: "/most-picked-3.png",
  },
  {
    id: 4,
    name: "Vinna Hill",
    place: "Malang, Indonesia",
    price: 62,
    img: "/most-picked-4.png",
  },
  {
    id: 5,
    name: "Bobox",
    place: "Medan, Indonesia",
    price: 22,
    img: "/most-picked-5.png",
  },
] as IItem[];

const BEAUTY_BACKYARD = [
  {
    id: 6,
    name: "Tobby Town",
    place: "Gunung Batu, Indonesia",
    img: "/beauty-backyard-1.png",
    isPopular: true,
  },
  {
    id: 7,
    name: "Anggana",
    place: "Bogor, Indonesia",
    img: "/beauty-backyard-2.png",
  },
  {
    id: 8,
    name: "Seattle Rain",
    place: "Jakarta, Indonesia",
    img: "/beauty-backyard-3.png",
  },
  {
    id: 9,
    name: "Wodden Pit",
    place: "Wonosobo, Indonesia",
    img: "/beauty-backyard-4.png",
  },
] as IItem[];

const LARGE_LIVING = [
  {
    id: 10,
    name: "Green Park",
    place: "Tanggerang, Indonesia",
    img: "/large-living-1.png",
  },
  {
    id: 11,
    name: "Podo Wae",
    place: "Madiun, Indonesia",
    img: "/large-living-2.png",
  },
  {
    id: 12,
    name: "Silver Rain",
    place: "Bandung, Indonesia",
    img: "/large-living-3.png",
  },
  {
    id: 13,
    name: "Cashville",
    place: "Kemang, Indonesia",
    img: "/large-living-4.png",
    isPopular: true,
  },
] as IItem[];

const KITCHEN = [
  {
    id: 14,
    name: "PS Wood",
    place: "Depok, Indonesia",
    img: "/kitchen-1.png",
  },
  {
    id: 15,
    name: "One Five",
    place: "Jakarta, Indonesia",
    img: "/kitchen-2.png",
  },
  {
    id: 16,
    name: "Minimal",
    place: "Bogor, Indonesia",
    img: "/kitchen-3.png",
    isPopular: true,
  },
  {
    id: 17,
    name: "Stays Home",
    place: "Wonosobo, Indonesia",
    img: "/kitchen-4.png",
  },
] as IItem[];

const TREASURE = [
  { id: 18, name: "Green Lake", place: "Nature", img: "/treasure-1.png" },
  { id: 19, name: "Dog Clubs", place: "Pool", img: "/treasure-2.png" },
  {
    id: 20,
    name: "Labour and Wait",
    place: "Shopping",
    img: "/treasure-3.png",
    isPopular: true,
  },
  { id: 21, name: "Snorkeling", place: "Beach", img: "/treasure-4.png" },
] as IItem[];

export { BEAUTY_BACKYARD, MOST_PICKED, LARGE_LIVING, KITCHEN, TREASURE };
