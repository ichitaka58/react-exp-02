import React from "react";
import Header from "../../layout/Header";
import SideBar from "../../layout/SideBar";
import styles from "./style.module.scss";
import News from "../../components/News";
import CalendarItem from "../../components/CalendarItem";

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.home}>
        <SideBar />
        <div className={styles.contents}>
          <News />
          <CalendarItem />
        </div>
      </div>
    </>
  );
};

export default Home;
