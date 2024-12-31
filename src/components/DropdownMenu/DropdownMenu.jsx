import styles from "./DropdownMenu.module.css";
import { SearchIcon, ClockIcon } from "../icons";
import { useDispatch, useSelector } from "react-redux";
import { visitedQuery } from "../../store/actions/getQuery";

export const DropdownMenu = ({
  ref: { current },
  text,
  setText,
  showDropdown,
}) => {
  const data = useSelector(
    ({ listOfHistoryReducer }) => listOfHistoryReducer?.history
  );

  const dispatch = useDispatch();

  const handleItem = (id) => {
    dispatch(visitedQuery(id));
  };

  return (
    <ul className={styles.dropdownMenu} ref={current}>
      {data?.length !== 0 &&
        data?.map((item) => (
          <li
            className={styles.dropdownItem}
            key={item.id}
            onClick={() => handleItem(item.id)}
          >
            <div className={styles.searchItem}>
              {item.visited ? <SearchIcon /> : <ClockIcon />}
            </div>
            <div className={styles.title}>{item.title}</div>
          </li>
        ))}
    </ul>
  );
};
