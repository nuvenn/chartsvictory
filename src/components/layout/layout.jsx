import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "../../styles/App.scss";
import Container from "../layout/base/container";
import Menu from "../layout/base/menu";
import Content from "../layout/base/content";
import { setOpenMainMenu, setOpenMobileMenu } from "./layoutActions";

export default function Layout(props) {
  const layout = useSelector((state) => state.layout);
  const dispatch = useDispatch();

  const toggleMenu = function () {
    layout.openMainMenu
      ? dispatch(setOpenMainMenu(false))
      : dispatch(setOpenMainMenu(true));
  };

  const toggleMenuMobile = function () {
    layout.openMobileMenu
      ? dispatch(setOpenMobileMenu(false))
      : dispatch(setOpenMobileMenu(true));
  };

  return (
    <>
      <Container>
        <Menu
          open={layout.openMainMenu}
          openMobile={layout.openMobileMenu}
          toggleMenu={toggleMenu}
          toggleMenuMobile={toggleMenuMobile}
        />
        <Content open={layout.openMainMenu}>{props.children}</Content>
      </Container>
    </>
  );
}
