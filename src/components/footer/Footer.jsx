import React, { useMemo } from "react";
import PropTypes from "prop-types";
import {
  FooterWrap,
  FooterContainer,
  FooterItem,
  FooterList,
} from "./FooterStyled";

Footer.propTypes = {};

function Footer(props) {
  const dataFooter = useMemo(() => {
    return [
      {
        name: "会員登録",
      },
      {
        name: "運営会社",
      },
      {
        name: "利用規約",
      },
      {
        name: "個人情報の取扱について",
      },
      {
        name: "特定商取引法に基づく表記",
      },
      {
        name: "お問い合わせ",
      },
    ];
  }, []);

  return (
    <FooterWrap>
      <FooterContainer>
        <FooterList>
          {dataFooter.map((item, index) => {
            return <FooterItem key={index}>{item.name}</FooterItem>;
          })}
        </FooterList>
      </FooterContainer>
    </FooterWrap>
  );
}

export default Footer;
