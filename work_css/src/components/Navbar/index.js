import React from "react";
import style from "./main.module.css";

function Navbar() {
  return (
    <>
      <nav className={style.container}>
        <div className={style.logo}>Logo</div>
        <button className={style.signIn}>sign in</button>
      </nav>
    </>
  );
}

export default Navbar;
