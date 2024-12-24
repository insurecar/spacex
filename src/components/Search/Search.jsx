import { useState, useRef, useEffect } from "react";
import { DropdownMenu } from "..";
import { SearchIcon, DeleteIcon } from "../icons";
import styles from "./Search.module.css";

import cn from "classnames";

export const Search = () => {
  const [text, setText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const resultsRef = useRef(null);
  console.log("SHOPDROPDOWN", showDropdown);

  const handleInput = ({ target: { value } }) => {
    setText(() => value);
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

  useEffect(() => {
    // Close results when clicking outside the results container
    const handleClickOutside = (event) => {
      if (resultsRef.current && !resultsRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      {showDropdown && <DropdownMenu ref={resultsRef} />}
    </div>
  );
};
