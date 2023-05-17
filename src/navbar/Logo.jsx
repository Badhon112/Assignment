import React from "react";
import img1 from "../assist/logo.jpg";
export default function Logo() {
  return (
    <div
      style={{
        display: "flex",
        justifycontent: "center",
        alignitems: "center",
        gap: "0.75rem",
      }}
    >
      <img
        src={img1}
        alt="This is Logo"
        style={{ width: "3.5rem", height: "3.5rem", borderRadius: "9999px" }}
      />
      <span
        style={{
          fontSize: "1.875rem",
          lineHeight: "2.25rem",
          fontStyle: "italic",
          marginTop:"5px"
        }}
      >
        Sanjina jaman Sinchu
      </span>
    </div>
  );
}
