import React from "react";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import Header from "../../components/Header";

const DiaryAdd = () => {
  return (
    <>
      <Header>Diary Add</Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>다이어리 추가화면</h2>
      </Main>
      <Footer>
        <h2 style={{ color: "#111111", fontWeight: "500" }}>입력해 주세요.</h2>
      </Footer>
    </>
  );
};

export default DiaryAdd;
