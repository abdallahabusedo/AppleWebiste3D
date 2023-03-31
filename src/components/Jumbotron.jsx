import React from "react";
import Iphone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png";
function Jumbotron() {
  const handelLearnMore = () => {
    const element = document.querySelector(".sound-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img className="logo" src={Iphone} alt="iPhone 14 Pro Max" />
      <p className="text">Big and bigger</p>
      <span className="description">
        From $1099 or $45.79/mo. per month for 24 mo.months before
        trade‑inFootnote*
      </span>
      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <a className="link" onClick={handelLearnMore}>
            Learn more
          </a>
        </li>
      </ul>
      <img className="iphone-img" src={HoldingIphone} alt="HoldingIphone" />
    </div>
  );
}

export default Jumbotron;
