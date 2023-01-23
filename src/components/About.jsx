import React from 'react'

const About = () => {
  const myStyle = {
          padding:"30px",
         display:"flex",
         justifyContent:"space-between"
     }
     const left_div={
          
          backgroundColor:"#03042C",
          color:"white",
     width:"48%",
     height:"700px",
     boxShadow:"6px 6px 2px gray"
     }
     const right={
          backgroundColor:"#03042C",
          color:"white",
          width:"48%",
          height:"700px",
          boxShadow:"6px 6px 2px gray"
     };
  return (
    <>
    <div>About</div>
    <div style={myStyle}>
               <div style={left_div} className="left">
                  //image
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum iure voluptatum temporibus sunt, enim odit reprehenderit quaerat aliquam dolorem facere quod id cumque error nulla quia earum aut, expedita totam.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque nulla eum omnis non tempore vel soluta ut, asperiores laborum sunt quidem velit minus quod veritatis doloribus qui accusantium odio!
               </div>
               <div style={right} className="right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quis aperiam adipisci perspiciatis ut architecto velit, numquam doloremque animi nostrum voluptate repellat non aliquid similique minima enim. Magni, quaerat dicta.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sequi reprehenderit quos fugiat sit hic voluptatem, molestias cumque, similique repudiandae illo? Fugiat reiciendis at impedit nesciunt repellat veritatis sed perferendis?
               </div>
          </div>
          </>
  )
}

export default About
