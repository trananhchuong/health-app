import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HeroImageSectionStyled = styled.section`
  display: flex;
  align-items: center;
  max-height: 316px;

  background-color: #2e2e2e;
  width: 100%;

  .food-image {
    flex: 2;

    img {
      width: 100%;
      height: 316px;
      object-fit: cover;
    }
  }

  .chart-image {
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

HeroImageSection.propTypes = {};

function HeroImageSection() {
  return (
    <HeroImageSectionStyled>
      <div className="food-image">
        <img src="/assets/photo/d01.jpg" alt={`food image`} />
      </div>
      <div className="chart-image">
        <img src="/assets/photo/main_graph.svg" alt={`main_graph image`} />
      </div>
    </HeroImageSectionStyled>
  );
}

export default HeroImageSection;
