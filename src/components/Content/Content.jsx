import styles from "./Content.module.css";
import cn from "classnames";
import { useSelector } from "react-redux";

export const Content = () => {
  const data = useSelector(({ contentReducer }) => contentReducer.content);
  const handleLink = (id) => {};
  return (
    <ul className={styles.content}>
      {data?.map((item) => (
        <li key={item.id}>
          <h3>
            <a
              className={styles.title}
              target="__blank"
              href={item.link}
              onClick={handleLink}
            >
              {item.title}
            </a>
          </h3>
          <div>{item.description}</div>
        </li>
      ))}
    </ul>
  );
};
