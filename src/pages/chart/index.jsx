import React from "react";
import Header from "../../layout/Header";
import SideBar from "../../layout/SideBar";
import styles from "./style.module.scss";
import ChartBar from "../../components/Chart";

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.chart}>
        <SideBar />
        <ChartBar />
      </div>
    </>
  );
};

export default Home;
