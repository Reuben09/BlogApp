import React, { useState } from "react";
import {
  FooterContainer, 
  FooterLinks
} from "./styled";
import {  Navbar, Sidebar, Modal } from '@components'



export const Header = () => {
  const [sideBarShow, setSidBarShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const showSideBar = () => {
    setSidBarShow(true);
  };
  const hideSideBar = () => {
    setSidBarShow(false);
  };
  const showModal = () => {
    setModalShow(true);
  };
  const hideModal = () => {
    setModalShow(false);
  };

  return (
    <>
      <Navbar showSideBar={showSideBar} showModal={showModal} />
      {sideBarShow && <Sidebar hideSideBar={hideSideBar} />}
      {modalShow && <Modal hideModal={hideModal} />}
    </>
  );
};

export const Footer = ()=> {
return(
  <FooterContainer>
      <p>©2022 Reuben09</p>
      <FooterLinks>
        <p>
          <a href="#">Twitter</a>
        </p>
        <p>
          <a href="#">LinkedIn</a>
        </p>
        <p>
          <a href="#">Github</a>
        </p>
      </FooterLinks>
    </FooterContainer>
)
}