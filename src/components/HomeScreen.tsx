import React from "react";
import Footer from "./LandingPage/Footer";
import Hero from "./LandingPage/Hero";
import ManageAccount from "./LandingPage/ManageAccount";
import Profile from "./LandingPage/Profile";
import TrustedBy from "./LandingPage/TrustedBy";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <Footer />
      <ManageAccount />
      <TrustedBy />
      <Profile />
    </div>
  );
};

export default HomeScreen;
