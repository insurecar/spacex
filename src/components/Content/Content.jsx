import styles from "./Content.module.css";
import cn from "classnames";
import { useSelector } from "react-redux";

export const Content = () => {
  const data = useSelector(({ contentReducer }) => contentReducer.content);
  console.log("asdasd", data);

  return (
    <ul className={styles.content}>
      {data?.map((item) => (
        <li key={item.id}>
          <h3>{item.title}</h3>
          <div>{item.description}</div>
        </li>
      ))}
    </ul>
  );
};
