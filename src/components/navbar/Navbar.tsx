import React, { useMemo, useState } from "react";
import NavbarItem from "./NavbarItem";
import { Nav, NavbarContainer, NavLogo, NavMenu } from "./NavbarStyles.js";

const Navbar = () => {
  const dataNav = useMemo(() => {
    return [
      {
        name: "自分の記録",
        imgSrc: "/assets/nav/icon_memo.svg",
      },
      {
        name: "チャレンジ",
        imgSrc: "/assets/nav/challenge.svg",
      },
      {
        name: "お知らせ",
        imgSrc: "/assets/nav/notice.svg",
      },
      {
        name: "",
        imgSrc: "/assets/nav/icon_menu.svg",
      },
    ];
  }, []);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo href="/">
          <img src="/assets/logo.svg" alt={`images banner`} />
        </NavLogo>
        <NavMenu>
          {dataNav.map((nav, index) => {
            const { imgSrc, name } = nav;
            return <NavbarItem imgSrc={imgSrc} name={name} key={index} />;
          })}
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
