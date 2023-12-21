import React from "react";
import styled from "styled-components";



export default function Heros() {
  return (
    <Section id="hero">
   
      <div className="content">
        <div className="title">
          <h1>TRAVEL TO EXPLORE</h1>
          <p>
          "Embark on a captivating journey of discovery with our immersive travel tour, where every destination becomes a story waiting to unfold."
          </p>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="">Where you are.</label>
            <input type="text" placeholder="Start Journey" />
          </div>
          <div className="container">
            <label htmlFor="">Where you want to go</label>
            <input type="text" placeholder="Destination" />
          </div>
          <div className="container">
            <label htmlFor="">Select Date</label>
            <input type="date" />
          </div>
          <button>Explore Now</button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  /* Include your styled components CSS here */
`;

