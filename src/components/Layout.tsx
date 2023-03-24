import styles from "@/styles/Home.module.css";
import React, { FC } from "react";
import Meta from "./Meta";

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Meta />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
