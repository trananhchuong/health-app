import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { MealComponentStyled } from "./MealComponentStyled";
import MealComponent from "./MealComponent";

ListMealComponent.propTypes = {};

function ListMealComponent() {
  const listMealData = useMemo(() => {
    return [
      {
        mealName: "Morning",
        imgSrc: "/assets/photo/icon_knife.svg",
      },
      {
        mealName: "Lunch",
        imgSrc: "/assets/photo/icon_knife.svg",
      },
      {
        mealName: "Dinner",
        imgSrc: "/assets/photo/icon_knife.svg",
      },
      {
        mealName: "Snack",
        imgSrc: "/assets/photo/icon_cup.svg",
      },
    ];
  }, []);

  return (
    <MealComponentStyled>
      {listMealData.map((meal, index) => {
        const { mealName, imgSrc } = meal;
        return <MealComponent mealName={mealName} imgSrc={imgSrc} />;
      })}
    </MealComponentStyled>
  );
}

export default ListMealComponent;
