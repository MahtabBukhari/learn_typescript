import React from "react";
import HomePageComponentOne from "../components/HomePageComponentOne";
import HomePageComponentTwo from "../components/HomePageComponentTwo";

const obj={
    name:'mahtab',
    age:22,
    work:'web developer'
}

const HomePage = () => {

  return (
    <>
      <HomePageComponentOne name={"mahtab"} age={23} work={'programmer'} />
      <HomePageComponentTwo data={obj}  />
    </>
  );
};

export default HomePage;
