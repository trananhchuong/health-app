import React from "react";
import PropTypes from "prop-types";
import { FoodComponentStyled } from "./FoodComponentStyled";

interface FoodProps {
  foodInfo: string;
  imgSrc: string;
}

FoodComponent.propTypes = {};

function FoodComponent(props: FoodProps) {
  return (
    <FoodComponentStyled
      style={{
        backgroundImage: `url(${props.imgSrc})`,
      }}
    >
      <span className="info__box">
        <div className="info">{props.foodInfo}</div>
      </span>
    </FoodComponentStyled>
  );
}

export default FoodComponent;
