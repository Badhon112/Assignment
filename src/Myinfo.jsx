import React from "react";
import Image from "./Image.jpg";
export default function Myinfo() {
  return (
    <div
      style={{
        display: "flex",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        // backgroundColor: "#1F2937",
        color: "#white",
        width: "100%",
        height: "100vh",
      }}
      id="Home"
    >
      <div
        style={{
          display: "flex",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          marginLeft: "auto",
          marginRight: "auto",
          flexDirection: "column",
          flex: "1 1 0%",
          justifyContent: "center",
          height: "100%",
          gap: "0.75rem",
        }}
      >
        <span style={{ fontSize: "3rem", lineHeight: "1", fontWeight: "700" }}>
          Hey! I Am
        </span>
        <span
          style={{
            color: "#059669",
            fontSize: "3rem",
            lineHeight: "1",
            fontWeight: "700",
          }}
        >
          Sanjina jaman Sinchu
        </span>
        <p className="text-clip">
          I am a Computer Science Student in Bangladesh. Since beginning my
          journey as a freelance both fontend and backend designer nearly 3
          years ago, I've done remote work for agencies, consulted for startups,
          and collaborated with talented people to create digital products for
          both business and consumer use. I'm quietly confident, naturally
          curious, and perpetually working on improving my chops one design
          problem at a time
        </p>
        <a
          href="#Contact"
          style={{
            textDecoration:"none",
            fontSize:"30px"
            
          }}
        >
          Hire me
        </a>
      </div>
      <div style={{ display: "flex", marginTop: "4rem", flex: "1 1 0%" }}>
        <img
          src={Image}
          alt=""
          style={{
            objectFit: "cover",
            backgroundColor: "#1F2937",
            borderRadius: "1rem",
          }}
        />
      </div>
    </div>
  );
}
