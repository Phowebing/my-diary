import React from "react";
import { BotBar } from "../styles/footerstyle";

const Footer = () => {
  return (
    <BotBar>
      <button>
        <img src="images/bt_circle.svg" />
      </button>
      <button className="plus_button">
        <img src="images/bt_plus.svg" />
      </button>
    </BotBar>
  );
};

export default Footer;
