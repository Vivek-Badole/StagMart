import React from "react";
import FeatureProduct from "../Components/FeatureProduct";

import InsideContent from "../Components/InsideContent";
import Services from "../Components/Services";
import Trusted from "../Components/Trusted";

const HomePage = () => {
  const name = "Stag Mart";
  return (
    <>
      <InsideContent name={name} />
      <FeatureProduct />
      <Services />
      <Trusted />
      
    </>
  );
};

export default HomePage;
