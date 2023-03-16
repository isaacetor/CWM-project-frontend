import React from "react";
import Footer from "./LandingPage/Footer";
import Hero from "./LandingPage/Hero";
import ManageAccount from "./LandingPage/ManageAccount";
import TrustedBy from "./LandingPage/TrustedBy";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <Footer />
      <ManageAccount />
      <TrustedBy />
    </div>
  );
};

export default HomeScreen;
