import React from "react";
import "./style.css";
export default function Nav() {
  return (
    <div>
      <ul style={{ listStyle: "none", display: "flex" }}>
        <li
          
          style={{
            paddingTop: ".5rem",
            paddingBottom: "1rem",
            fontSize: "2rem",
            lineHeight: "2.5rem",
            cursor: "pointer",
          }}
        >
          <a href="#Home" style={{textDecoration:"none",outline:"none"}}>Home</a>
          
        </li>
        <li
          style={{
            paddingTop: ".5rem",
            paddingBottom: "1rem",
            fontSize: "2rem",
            lineHeight: "2.5rem",
            cursor: "pointer",
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          About{" "}
        </li>
        <li
          style={{
            paddingTop: ".5rem",
            paddingBottom: "1rem",
            fontSize: "2rem",
            lineHeight: "2.5rem",
            cursor: "pointer",
          }}
        >
          <a href="#footer" style={{textDecoration:"none",outline:"none"}}>Footer</a>
          
        </li>
      </ul>
    </div>
  );
}
