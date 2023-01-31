import React from "react";
import versus from "../assets/logo_gold.png";
import banner from "../assets/banner.png"
import "../styles/About.scss"

export default function About() {
  return (
    <>
      <section id="about" className="pt-5">
        <div className="abt-heading flex">
          {/* <img src={banner} alt="" /> */}
          <div className="overlay-text"><h1>About Versus</h1></div>
        </div>
        <div className="container flex">
        <div className="row">
          <div className="abt-img col-lg-6">
            <img src={versus} alt="" />
          </div>
          <div className="abt-writeup col-lg-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
            cumque dignissimos ipsam consequuntur consectetur, voluptate quas.
            Suscipit consequatur sint minima labore nihil distinctio nulla,
            officiis, quasi magnam eaque voluptas laborum. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Cum corporis, nihil totam error
            fugiat quae! Consequatur, sed adipisci. Sunt laboriosam nisi,
            dolores quos odit facilis autem possimus obcaecati asperiores
            veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            itaque excepturi, ex voluptatum asperiores aspernatur provident
            laborum? Rerum modi tempora voluptatem enim error vitae, dolorem
            expedita ex veritatis aperiam nesciunt? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Impedit, velit. Quisquam animi
            consequuntur voluptate, excepturi hic iste repellendus ut
            voluptatibus voluptatum corrupti sint doloribus. Maxime, architecto
            ipsa! Vero, quasi placeat? Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
