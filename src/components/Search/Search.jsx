import { useState, useEffect } from "react";
import { DropdownMenu } from "..";
import { SearchIcon, DeleteIcon } from "../icons";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Search.module.css";
import { getQuery } from "../../store/actions/getQuery";

import cn from "classnames";

export const Search = () => {
  const [text, setText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [results, setResults] = useState([]);
  const dispatch = useDispatch();

  const handleInput = ({ target: { value } }) => {
    setText(() => value);

    dispatch(getQuery());
  };

  const handleClearText = () => setText("");

  const showDeleteIcon = cn(styles.deleteButtonHide, {
    [styles.deleteButton]: text.trim().length,
  });

  useEffect(() => {
    if (!text.trim()) {
      setShowDropdown(false);
    } else {
      setShowDropdown(true);
    }
  }, [text]);

  return (
    <div className={styles.searchWrapper}>
      <button className={styles.search}>
        <div className={styles.icon}>
          <SearchIcon />
        </div>

        <div className={styles.searchInput}>
          <input type="text" onChange={handleInput} value={text}></input>
          <div className={showDeleteIcon} onClick={handleClearText}>
            <DeleteIcon />
          </div>
        </div>
        <div className={styles.navigation}></div>
      </button>
      {showDropdown && <DropdownMenu data={results} />}
    </div>
  );
};
