import { forwardRef } from "react";
import styles from "./DropdownMenu.module.css";
import { SearchIcon, ClockIcon } from "../icons";

export const DropdownMenu = ({ ref: { current } }) => {
  const fake = [
    {
      id: 1,
      title: "React",
      visited: false,
    },
    {
      id: 2,
      title: "Angular",
      visited: true,
    },
    {
      id: 3,
      title: "Vue",
      visited: false,
    },
    {
      id: 4,
      title: "Svelte",
      visited: false,
    },
    {
      id: 5,
      title: "Node.js",
      visited: true,
    },
    {
      id: 6,
      title: "Express",
      visited: false,
    },
    {
      id: 7,
      title: "Next.js",
      visited: true,
    },
    {
      id: 8,
      title: "Nuxt.js",
      visited: false,
    },
    {
      id: 9,
      title: "Django",
      visited: true,
    },
    {
      id: 10,
      title: "Flask",
      visited: false,
    },
    {
      id: 11,
      title: "Ruby on Rails",
      visited: true,
    },
    {
      id: 12,
      title: "Laravel",
      visited: false,
    },
  ];
  console.log("asdasd", current);

  return (
    <ul className={styles.dropdownMenu} ref={current}>
      {fake.map((item) => (
        <li className={styles.dropdownItem} key={item.id}>
          <div className={styles.searchItem}>
            {item.visited ? <SearchIcon /> : <ClockIcon />}
          </div>
          <div className={styles.title}>{item.title}</div>
        </li>
      ))}
    </ul>
  );
};
