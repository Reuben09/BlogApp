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
  <footer className="h-32 flex flex-col items-center justify-center" style={{marginTop:"4rem"}}>
      <p>©2022 Reuben09</p>
      <div className="flex">
        <p className="px-4" style={{textDecoration: "underline"}}>
          <a href="https://twitter.com/reuben09_" className="underline">Twitter</a>
        </p>
        <p className="px-4" style={{textDecoration: "underline"}}>
          <a href="https://www.linkedin.com/in/chukwuka_reuben-54620a212" className="underline">LinkedIn</a>
        </p>
        <p className="px-4" style={{textDecoration: "underline"}}>
          <a href="https://github.com/Reuben09">Github</a>
        </p>
      </div>
    </footer>
)
}