import styled from "@emotion/styled";

export const TopBar = styled.header`
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
