import React from "react";
import aboutus from "../assets/aboutus.jpg";
import banner from "../assets/banner.png";
import "../styles/About.scss";

export default function About() {
  return (
    <>
      <section id="about" className="pt-5">
        <div className="section-heading flex">
          <h1>About Us</h1>
        </div>
        <div className="container flex mt-4">
          <div className="row">
            <div className="abt-img col-lg-6">
              <img src={aboutus} alt="" />
            </div>
            <div className="abt-writeup col-lg-6 px-sm-5">
              Institute of Engineering & Management brings to you Versus -
              organized by the Department of Computer Science & Application.
              <br/>
              "VERSUS" is a Mega gaming event inviting gamers of all kind to
              showcase their skills in both PC as well as mobile games,
              including Valorant, CS 1.6, NFS, 8 Ball Pool With Versus, our
              vision is to garner a specific appeal for gaming via this platform
              . <br/>We have all the elements that makes it engaging and powerful -
              from strategy to mind games to camaraderie to thrills to
              risk-taking and much more. The long needed gaming community
              finally getting its' own deserving platform at Versus 2k23.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
