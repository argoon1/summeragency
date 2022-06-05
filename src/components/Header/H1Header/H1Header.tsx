import React from "react";
import styles from "./H1Header.module.css";
type H1HeaderProps = {
  text: string;
  white?: true;
  centerVertically?: true;
};
const H1Header = ({ text, white, centerVertically }: H1HeaderProps) => {
  return (
    <h1
      className={`${styles.mainHeader} ${
        centerVertically && styles.centerVert
      }`}
      style={white && { color: "white" }}
    >
      {text}
    </h1>
  );
};

export default H1Header;
