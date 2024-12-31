import styles from "./DropdownMenu.module.css";
import { SearchIcon, ClockIcon } from "../icons";

export const DropdownMenu = (data) => {
  return (
    <ul className={styles.dropdownMenu}>
      {data.length &&
        data.map((item) => (
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
