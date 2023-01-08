import styled from "styled-components";

export const ListFoodStyled = styled.section`
  max-width: 960px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0.8rem;

  margin: 0 auto 2.8rem;
`;
export const FoodComponentStyled = styled.div`
  width: 23.4rem;
  height: 23.4rem;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: flex-end;

  .info__box {
    background: #ffcc21;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.7rem;
  }
`;
