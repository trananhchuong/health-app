import React from "react";
import PropTypes from "prop-types";
import { MealComponentStyled } from "./MealComponentStyled";

interface MealProps {
  mealName: string;
  imgSrc: string;
}

MealComponent.propTypes = {};

function MealComponent(props: MealProps) {
  return (
    <div className="meal__box">
      <img
        src="/assets/photo/polygon_background.svg"
        alt={`polygon_background.svg`}
      />
      <div className="content-meal">
        <div className="img__box">
          <img src={props.imgSrc} alt={props.mealName} />
        </div>
        <div className="name">{props.mealName}</div>
      </div>
    </div>
  );
}

export default MealComponent;
