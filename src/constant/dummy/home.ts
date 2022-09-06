import IItem from "../model/item";

const MOST_PICKED = [
  {
    name: "Blue Origin Fams",
    place: "Jakarta, Indonesia",
    price: 50,
    img: "/most-picked-1.png",
  },
  {
    name: "Ocean Land",
    place: "Bandung, Indonesia",
    price: 22,
    img: "/most-picked-2.png",
  },
  {
    name: "Stark House",
    place: "Malang, Indonesia",
    price: 856,
    img: "/most-picked-3.png",
  },
  {
    name: "Vinna Hill",
    place: "Malang, Indonesia",
    price: 62,
    img: "/most-picked-4.png",
  },
  {
    name: "Bobox",
    place: "Medan, Indonesia",
    price: 22,
    img: "/most-picked-5.png",
  },
] as IItem[];

const BEAUTY_BACKYARD = [
  {
    name: "Tobby Town",
    place: "Gunung Batu, Indonesia",
    img: "/beauty-backyard-1.png",
    isPopular: true,
  },
  {
    name: "Anggana",
    place: "Bogor, Indonesia",
    img: "/beauty-backyard-2.png",
  },
  {
    name: "Seattle Rain",
    place: "Jakarta, Indonesia",
    img: "/beauty-backyard-3.png",
  },
  {
    name: "Wodden Pit",
    place: "Wonosobo, Indonesia",
    img: "/beauty-backyard-4.png",
  },
] as IItem[];

const LARGE_LIVING = [
  {
    name: "Green Park",
    place: "Tanggerang, Indonesia",
    img: "/large-living-1.png",
  },
  {
    name: "Podo Wae",
    place: "Madiun, Indonesia",
    img: "/large-living-2.png",
  },
  {
    name: "Silver Rain",
    place: "Bandung, Indonesia",
    img: "/large-living-3.png",
  },
  {
    name: "Cashville",
    place: "Kemang, Indonesia",
    img: "/large-living-4.png",
    isPopular: true,
  },
] as IItem[];

const KITCHEN = [
  {
    name: "PS Wood",
    place: "Depok, Indonesia",
    img: "/kitchen-1.png",
  },
  {
    name: "One Five",
    place: "Jakarta, Indonesia",
    img: "/kitchen-2.png",
  },
  {
    name: "Minimal",
    place: "Bogor, Indonesia",
    img: "/kitchen-3.png",
    isPopular: true,
  },
  {
    name: "Stays Home",
    place: "Wonosobo, Indonesia",
    img: "/kitchen-4.png",
  },
] as IItem[];

const TREASURE = [
  {
    name: "Green Lake",
    place: "Nature",
    img: "/treasure-1.png",
  },
  {
    name: "Dog Clubs",
    place: "Pool",
    img: "/treasure-2.png",
  },
  {
    name: "Labour and Wait",
    place: "Shopping",
    img: "/treasure-3.png",
    isPopular: true,
  },
  {
    name: "Snorkeling",
    place: "Beach",
    img: "/treasure-4.png",
  },
] as IItem[];

export { BEAUTY_BACKYARD, MOST_PICKED, LARGE_LIVING, KITCHEN, TREASURE };
