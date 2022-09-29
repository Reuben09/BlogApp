import React, { useState } from "react";
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
  <footer className="h-32 mt-24 flex flex-col items-center justify-center ">
      <p>©2022 Reuben09</p>
      <div className="flex">
        <p className="px-2">
          <a href="#">Twitter</a>
        </p>
        <p className="px-2">
          <a href="#">LinkedIn</a>
        </p>
        <p className="px-2 underline">
          <a href="#" className="underline">Github</a>
        </p>
      </div>
    </footer>
)
}