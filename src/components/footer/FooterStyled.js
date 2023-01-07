import styled from "styled-components";
import { BG_NAVBAR_COLOR, titleSize } from "../../constants/VariablesStyles";
import { Container } from "../../styles/globalStyles";

export const FooterWrap = styled.footer`
  background: ${BG_NAVBAR_COLOR};
  height: 12rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: auto;
  flex-shrink: 0;

  font-size: ${titleSize};
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: start;

  ${Container}
`;

export const FooterList = styled.ul`
  display: flex;
  justify-content: space-evenly;

  align-items: center;
  list-style: none;
  text-align: center;
  width: 100%;
`;

export const FooterItem = styled.li``;
