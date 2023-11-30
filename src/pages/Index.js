import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Header>My Diary</Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>웹서비스 첫 화면</h2>
      </Main>
      <Footer>
        <h2 style={{ color: "#cccrrr", fontWeight: "500" }}>입력해 주세요.</h2>
      </Footer>
    </>
  );
};

export default Index;
