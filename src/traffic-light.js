import React from "react";

const trafficStyles = {
  width: "15%",
  height: "70vh",
  border: "4px solid #aaa",
  borderRadius: "16px",
  display: "block",
  margin: "auto",
  marginTop: "4rem",
  backgroundColor: "#7c7777"
};

const lightStyles = {
  borderRadius: "50%",
  border: "2px solid #aaa",
  height: "30%",
  width: "80%",
  display: "block",
  margin: "auto",
  marginTop: "5%"
};

const TrafficLight = ({ light }) => (
  <div style={trafficStyles}>
    <div style={{ ...lightStyles, backgroundColor: light === "red" ? "red" : "#aaa" }} />
    <div style={{ ...lightStyles, backgroundColor: light === "yellow" ? "yellow" : "#aaa" }} />
    <div style={{ ...lightStyles, backgroundColor: light === "green" ? "green" : "#aaa" }} />
  </div>
);

export default TrafficLight;
