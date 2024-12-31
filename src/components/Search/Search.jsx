import { useState, useEffect, useRef } from "react";
import { DropdownMenu } from "..";
import { SearchIcon, DeleteIcon } from "../icons";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Search.module.css";
import { getQuery } from "../../store/actions/getQuery";

import cn from "classnames";

export const Search = () => {
  const [text, setText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const data = useSelector(
    ({ listOfHistoryReducer }) => listOfHistoryReducer?.history
  );
  const resultsRef = useRef(null);
  const WrapperRef = useRef(null);
  const dispatch = useDispatch();

  const handleInput = ({ target: { value } }) => {
    setText(() => value);

    dispatch(getQuery(value));
  };

  const handleClearText = () => setText("");

  const showDeleteIcon = cn(styles.deleteButtonHide, {
    [styles.deleteButton]: text.trim().length,
  });

  useEffect(() => {
    const shouldShowDropdown = text.trim() && data?.length > 0;
    setShowDropdown(shouldShowDropdown);
  }, [text, data]);

  useEffect(() => {
    const handleClose = (event) => {
      if (WrapperRef.current && !WrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, []);

  return (
    <div className={styles.searchWrapper} ref={WrapperRef}>
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
      {showDropdown && (
        <DropdownMenu
          ref={resultsRef}
          text={text}
          setText={setText}
          showDropdown={showDropdown}
        />
      )}
    </div>
  );
};
