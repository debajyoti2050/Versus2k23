import React from "react";
import versus from "./versus.jpeg";


export default function Ab() {
     const cover = {
          backgroundImage: `url(${process.env.PUBLIC_URL
               +"https://elements-video-cover-images-0.imgix.net/files/895ba192-5ebc-43f1-9df8-6c80bd997356/inline_image_preview.jpg?auto=compress%2Cformat&fit=min&h=394&w=700&s=90b18a2580b7efd6e7fdc648f68586a0"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          margin: "40px"
     }
     const heading = {
          textAlign: "center",
          fontWeight:"800",
          fontSize:"44px",
          color:"white",
          textShadow:"3px 3px black"
     }
     const body = {
          color:"white",
          fontWeight:"700",
          backdropFilter:"blur(20px)",
          padding: "30px",
          boxShadow: "4px 4px 4px 4px black",
          margin: "50px",
          marginLeft: "250px",
          marginRight: "250px",
          borderRadius:"18px"
     }
     const logo = {
          marginRight: "30px",
          float: "left"
     };
     return (

          <div style={cover}>
               <br /><br />
               <div style={heading}>
                    ABOUT VERSUS
               </div>
               <br /><br /><br />
               <div style={body}>
                    <img src={versus} style={logo} alt="versus logo" />
                    <div>
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque dignissimos ipsam consequuntur consectetur, voluptate quas. Suscipit consequatur sint minima labore nihil distinctio nulla, officiis, quasi magnam eaque voluptas laborum.
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corporis, nihil totam error fugiat quae! Consequatur, sed adipisci. Sunt laboriosam nisi, dolores quos odit facilis autem possimus obcaecati asperiores veniam!
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit itaque excepturi, ex voluptatum asperiores aspernatur provident laborum? Rerum modi tempora voluptatem enim error vitae, dolorem expedita ex veritatis aperiam nesciunt?
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, velit. Quisquam animi consequuntur voluptate, excepturi hic iste repellendus ut voluptatibus voluptatum corrupti sint doloribus. Maxime, architecto ipsa! Vero, quasi placeat?
                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
               
               </div>
               <br /><br />
          </div>

     )
}
