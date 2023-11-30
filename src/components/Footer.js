import React from "react";
import { BotBar } from "../styles/footerstyle";
import { Link } from "react-router-dom";

const Footer = props => {
  return (
    <BotBar>
      <button>
        <img src="/images/bt_circle.svg" />
      </button>

      <Link to="">{props.children}</Link>

      <button className="plus_button">
        <img src="/images/bt_plus.svg" />
      </button>
    </BotBar>
  );
};

export default Footer;
