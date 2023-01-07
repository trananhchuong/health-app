import React from "react";
import PropTypes from "prop-types";
import { NavItem } from "./NavbarStyles.js";

NavbarItem.propTypes = {};

export interface INavItemProps {
  name?: string;
  imgSrc?: string;
  key: number;
}

function NavbarItem(props: INavItemProps) {
  return (
    <NavItem key={props.key}>
      <img src={props.imgSrc} />
      <span>{props.name}</span>
    </NavItem>
  );
}

export default NavbarItem;
