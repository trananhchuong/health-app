import React from "react";
import PropTypes from "prop-types";
import { Container } from "../../styles/globalStyles";
import HeroImageSection from "../../components/home/HeroImageSection";
import { HomeContainer } from "./HomeStyled";

Home.propTypes = {};

function Home() {
  return (
    <HomeContainer>
      <HeroImageSection />
    </HomeContainer>
  );
}

export default Home;
