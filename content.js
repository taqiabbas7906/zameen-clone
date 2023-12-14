import pakistan from "./src/assets/pakistan.png";
import uae from "./src/assets/united-arab-emirates.png";
import saudi from "./src/assets/saudi-arabia.png";
import jordan from "./src/assets/jordan.png";
import philippines from "./src/assets/philippines.png";
import indonesia from "./src/assets/indonesia.png";
import egypt from "./src/assets/egypt.png";
export const firstNav = [
  {
    name: "Properties",
    to: "/",
    dropDown: false,
  },
  {
    name: "Plot Finder",
    to: "/",
    dropDown: false,
  },

  {
    name: "Tools",
    to: "/",
    dropDown: true,
    more: [
      {
        name: "Home Loan Calculator",
        to: "/",
      },
      {
        name: "Area Unit Converter",
        to: "/",
      },
      {
        name: "Land Record Pages",
        to: "/",
      },
      {
        name: "Construction Cost Calculator",
        to: "/",
      },
    ],
  },
  {
    name: "More",
    to: "/",
    dropDown: true,
    more: [
      {
        name: "Area Guides",
        to: "/",
        dropDown: false,
      },
      {
        name: "Blog",
        to: "/",
        dropDown: false,
      },
      {
        name: "Maps",
        to: "/",
        dropDown: false,
      },
      {
        name: "Forum",
        to: "/",
      },
      {
        name: "Index",
        to: "/",
      },
      {
        name: "Trends",
        to: "/",
      },
    ],
  },
];

export const countries = [
  { name: "Pakistan", flag: pakistan },
  { name: "United Arab Emirates", flag: uae },
  { name: "Saudi Arabia", flag: saudi },
  { name: "Jordan", flag: jordan },
  { name: "Philippines", flag: philippines },
  { name: "Indonesia", flag: indonesia },
  { name: "Egypt", flag: egypt },
];

export const secondNav = [
  {
    name: "Buy",
    to: "/",
    more: true,
    dropDown: [
      {
        name: "Home",
      },
      {
        name: "Plots",
      },
      {
        name: "Commercial",
      },
    ],
  },
  {
    name: "Rent",
    to: "/",
    more: false,
  },
  {
    name: "Agents",
    to: "/",
    more: false,
  },
  {
    name: "New Projects",
    to: "/",
    more: false,
  },
];
