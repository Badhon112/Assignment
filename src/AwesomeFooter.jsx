import React from "react";

export default function AwesomeFooter() {
  return (
    <footer
      id="footer"
      style={{
        backgroundColor: "black",
        height: "200px",
        width: "100%",
        paddingTop: "10px",
        marginTop: "10px",
        borderRadius: "0.5rem",
        textAlign: "center",
        color: "white",
      }}
    >
      <h1 style={{ fontStyle: "italic" }}>Footer</h1>
      <h1 style={{ fontStyle: "italic" }}>passionate developer</h1>
      <h2 style={{ fontStyle: "italic", width: "50%", margin: "auto" }}>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit magni
        commodi reiciendis, voluptates error ducimus earum quaerat accusantium
        repudiandae officiis numquam ex itaque possimus enim optio vitae
        reprehenderit et odio corporis nostrum. Laboriosam quos illum dolore
        ipsam eveniet,
      </h2>
    </footer>
  );
}
