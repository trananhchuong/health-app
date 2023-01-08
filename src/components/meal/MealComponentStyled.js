import styled from "styled-components";

export const MealComponentStyled = styled.section`
  max-width: 960px;

  width: 100%;
  margin: 2.2rem auto;
  display: flex;
  justify-content: space-evenly;

  .meal__box {
    position: relative;

    .content-meal {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
