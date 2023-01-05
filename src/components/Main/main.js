import "../../reset.scss";
import "./main.scss";
import React from "react";
import Cryptocurrencies from "./Cryptocurrencies/сryptocurrencies";
import Advantages from "./Advantages/Advantages";
import Friendly from "./Friendly/friendly";
import Howit from "./Howit/howit";
const Main = () => {
  return (
    <div className="Main">
      <Cryptocurrencies />
      <Advantages />
      <Friendly />
      <Howit />
    </div>
  );
};

export default Main;
