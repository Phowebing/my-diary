import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";

const DiaryEdit = () => {
  const param = useParams();
  // console.log(param);

  return (
    <>
      <Header>Diary Edit</Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>
          다이어리 수정화면 {param.pk} 글 수정
        </h2>
      </Main>
      <Footer>
        <h2 style={{ color: "#cccrrr", fontWeight: "500" }}>
          편집할 내용을 선택해 주세요.
        </h2>
      </Footer>
    </>
  );
};

export default DiaryEdit;
