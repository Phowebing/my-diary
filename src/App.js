import styled from "@emotion/styled";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const TopBar = styled.header`
    width: 100%;
    height: 64px;
    display: flex;
    gap: 6px;

    align-items: center;

    justify-content: space-between;

    flex-shrink: 0;
    padding: 8px 4px;
    background: #fef7ff;
    h2 {
      width: 100%;
      height: auto;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      color: #1d1b20;
      text-align: center;
    }
    button {
      width: 48px;
      height: 48px;
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      flex-direction: column;
      border: none;
      background-color: transparent;
    }
  `;
  const Contents = styled.main`
    width: 100%;
    min-height: 500px;
  `;
  const BotBar = styled.footer`
    display: flex;
    width: 912px;
    height: 80px;
    padding: 0px 16px 0px 4px;
    align-items: center;
    gap: 276px;
    flex-shrink: 0;
    justify-content: space-between;

    button {
      width: 48px;
      height: 48px;
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      flex-direction: column;
      border: none;
      background-color: transparent;
    }
  `;
  return (
    <div className="layout">
      <div className="wrap">
        <Header />

        <Contents>중심 컨텐츠</Contents>
        <Footer />
      </div>
    </div>
  );
}

export default App;
