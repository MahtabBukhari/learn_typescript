import React from "react";
import HomePageComponentOne from "../components/HomePageComponentOne";
import HomePageComponentThree from "../components/HomePageComponentThree";
import HomePageComponentTwo from "../components/HomePageComponentTwo";

const obj = { name: "mahtab", age: 23, work: "computer" };

const arr = [
  { name: "mahtab", age: 23, work: "computer" },
  { name: "ali", age: 22, work: "programmer" },
];

const HomePage = () => {
  return (
    <div>
      <HomePageComponentOne name={"mahtab"} age={23} work={"programmer"} />
      <HomePageComponentTwo data={obj} />
      <HomePageComponentThree arr={arr} />
    </div>
  );
};

export default HomePage;
