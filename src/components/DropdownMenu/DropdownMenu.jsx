import styles from "./DropdownMenu.module.css";
import { SearchIcon, ClockIcon } from "../icons";
import { useSelector } from "react-redux";

export const DropdownMenu = (data) => {
  const data1 = useSelector(
    ({ listOfHistoryReducer }) => listOfHistoryReducer?.history
  );
  console.log("sjadfhdsghf", data1);

  return (
    <ul className={styles.dropdownMenu}>
      {data1.length &&
        data1?.map((item) => (
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
