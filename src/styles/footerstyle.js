import styled from "@emotion/styled";

export const BotBar = styled.footer`
  display: flex;
  width: 100%;
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
  .plus_button {
    border-radius: 16px;
    background: var(--m-3-sys-light-secondary-container, #e8def8);

    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3),
      0px 4px 8px 3px rgba(0, 0, 0, 0.15);
  }
`;
