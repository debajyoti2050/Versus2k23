import React from 'react'

const ValorantReg = () => {
  const submit_style = {
    fontFamily: "'Verdana'",
    fontSize:"14px",
    letterSpacing:"1px",
    fontWeight :"800",
    padding:"5px",
    backgroundColor : "white",
    border:"2px solid white",
    color:"#03042C",
    width: "30%",
    marginLeft: "300px",
    boxShadow:"4px 5px black",
    borderRadius:"9px"
  }
  const body={
    backgroundColor: "#03042C",
     color: "white",
     padding: "50px"
  }
  const input={
    marginTop: "5px",
     padding: "5px",
     width: "80%",
     border: "2px solid cyan",
     borderRadius: "4px",
     backgroundColor: "#03042C",
     color: "cyan",
  }
  const para={
    fontSize: "40px",
     fontWeight: "700",
     textAlign: "center",
     textShadow: "2px 2px 2px cyan",
  };
  return (
    <div style={body} className="form_element">

      <p style={para}>VALORANT REGISTRATION</p>
  
      <form style={{paddingLeft: "250px"}}action="">
        <label htmlFor="">Full Name</label>
        <br />
        <input style={input} type="text" placeholder="Enter your name" />
        <br /><br />
        <label htmlFor="">Email</label>
        <br />
        <input style={input} type="email" placeholder="abc@gmail.com" />
        <br /><br />
        <label htmlFor="">Phone</label>
        <br />
        <input style={input} type="text" placeholder="+91 XXXXX XXXXX" />
        <br /><br />
        <label htmlFor="">Profile Photo</label>
        <br />
        <input style={input} type="file" placeholder="No file chosen" />
        <br /><br />
        <label htmlFor="">LinkedIn Link</label>
        <br />
        <input style={input} type="url" placeholder="Enter your LinkedIn Link here" />
        <br /><br />
        <label htmlFor="">Github Link</label>
        <br />
        <input style={input} type="url" placeholder="Enter your Github Link here" />
        <br /><br />
        <input style={submit_style} type="submit" />
      </form>
    </div>
  )
}

export default ValorantReg
