import React from "react";
import Clock from "../../components/Clock";
import Header from "../../components/Header";
import List from "../../components/List";
import "../../styles.css";

const Main = () => {
  return (
    <>
      <Header />
      <Clock />
      <List />
    </>
  );
};

export default Main;
