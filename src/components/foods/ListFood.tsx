import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { ListFoodStyled } from "./FoodComponentStyled";
import FoodComponent from "./FoodComponent";

ListFood.propTypes = {};

function ListFood() {
  const listMealData = useMemo(() => {
    return [
      {
        foodInfo: "05.21.Morning",
        imgSrc: "/assets/photo/m01.jpg",
      },
      {
        foodInfo: "05.21.Lunch",
        imgSrc: "/assets/photo/l01.jpg",
      },
      {
        foodInfo: "05.21.Dinner",
        imgSrc: "/assets/photo/d01.jpg",
      },
      {
        foodInfo: "05.21.Snack",
        imgSrc: "/assets/photo/l01.jpg",
      },
      {
        foodInfo: "05.20.Morning",
        imgSrc: "/assets/photo/m01.jpg",
      },
      {
        foodInfo: "05.20.Lunch",
        imgSrc: "/assets/photo/l02.jpg",
      },
      {
        foodInfo: "05.20.Dinner",
        imgSrc: "/assets/photo/d02.jpg",
      },
      {
        foodInfo: "05.21.Snack",
        imgSrc: "/assets/photo/s01.jpg",
      },
    ];
  }, []);
  return (
    <ListFoodStyled>
      {listMealData.map((meal, index) => {
        const { foodInfo, imgSrc } = meal;
        return <FoodComponent foodInfo={foodInfo} imgSrc={imgSrc} />;
      })}
    </ListFoodStyled>
  );
}

export default ListFood;
