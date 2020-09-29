import React from "react";
import style from "./main.module.css";

function Footer() {
  return (
    <>
      <nav className={style.container}>
        <div className={style.copyRight}>@Copy right naratipcover</div>
        <button className={style.logIn}>log in</button>
      </nav>
    </>
  );
}

export default Footer;
