import React from "react";
import Logo from "./Logo";
import MyNavBar from "./MyNavbar";
export default function AwesomeHeader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "0.75rem",
      }}
    >
      <Logo />
      <MyNavBar />
    </div>
  );
}
