import React from "react";
import PropTypes from "prop-types";
import { LoadMoreButtonStyled, LoadMoreButtonWrap } from "./LoadMoreButtonStyled";
import { Container } from "../../styles/globalStyles";

LoadMoreButton.propTypes = {};

function LoadMoreButton() {
  return (
    <Container>
      <LoadMoreButtonWrap>
        <LoadMoreButtonStyled>記録をもっと見る</LoadMoreButtonStyled>
      </LoadMoreButtonWrap>
    </Container>
  );
}

export default LoadMoreButton;
