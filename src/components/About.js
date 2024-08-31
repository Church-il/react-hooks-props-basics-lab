// About.js
import React from "react";
import Links from "./Links";

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* Conditionally render the bio */}
      {bio && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* Render the Links component and pass the props */}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
