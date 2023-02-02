import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { unstable_HistoryRouter } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { TextField } from "../components/TextField";
import * as Yup from "yup";
import { RingLoader } from "react-spinners";
import "../styles/Form.css";
import Valo from "../assets/VALO.png"

const ValorantReg = () => {
  const submit_style = {
    fontFamily: "'Verdana'",
    fontSize: "14px",
    letterSpacing: "1px",
    fontWeight: "800",
    padding: "5px",
    backgroundColor: "white",
    border: "2px solid white",
    color: "#03042C",
    width: "30%",
    marginLeft: "300px",
    boxShadow: "4px 5px black",
    borderRadius: "9px",
  };
  const body = {
    backgroundColor: "rgba(28, 0, 62, 1)",
    color: "white",
    padding: "50px",
  };
  const input = {
    marginTop: "5px",
    padding: "5px",
    width: "80%",
    border: "2px solid cyan",
    borderRadius: "4px",
    backgroundColor: "#03042C",
    color: "cyan",
  };
  const para = {
    fontSize: "40px",
    fontWeight: "700",
    textAlign: "center",
    textShadow: "2px 2px 2px cyan",
  };
  const [loading,setLoading] =useState(false)
  // const history= unstable_HistoryRouter()
  // const validate = Yup.object({});
  return (
    
    <>
      <Navbar />
      <div className="iicform">
        {loading ? (
          <div className="submitpageloader">
            <RingLoader
              className="loader"
              color={"#ffff"}
              // css={override}
              loading={loading}
              size={70}
            />
          </div>
        ) : (
          <Formik
            initialValues={{
              Name: "",
            }}
            // validationSchema={validate}
            onSubmit={async (values) => {
              // console.log(values);
              setLoading(true);

              // try {
              //   await axios.post(
              //     "https://iic-backend.onrender.com/form",
              //     values
              //   );
              //   setLoading(false);
              //   history.push("/registrationsuccess");
              // } catch (error) {
              //   console.log(error);
              //   history.push("/registrationfailed");
              // }
            }}
          >
            {({ errors, touched }) => (
              <section id="appform">
                <div className="container">
                  <div className="header mt-3 mb-4">
                    <h1>Valorant Registration</h1>
                  </div>
                  <div className="display">
                    <img src={Valo} />
                    <Form className="mt-0 drop drop1 col-lg-8 mb-4 ">
                      <TextField
                        label="Enter Your Name*"
                        name="Name"
                        type="text"
                        placeholder="Enter Name "
                      />
                      <TextField
                        label="Enter Your Name*"
                        name="Name"
                        type="text"
                        placeholder="Enter Name "
                      />
                      <TextField
                        label="Enter Your Name*"
                        name="Name"
                        type="text"
                        placeholder="Enter Name "
                      />
                      <TextField
                        label="Enter Your Name*"
                        name="Name"
                        type="text"
                        placeholder="Enter Name "
                      />
                      <TextField
                        label="Enter Your Name*"
                        name="Name"
                        type="text"
                        placeholder="Enter Name "
                      />
                      <TextField
                        label="Enter Your Name*"
                        name="Name"
                        type="text"
                        placeholder="Enter Name "
                      />
                      <TextField
                        label="Enter Your Name*"
                        name="Name"
                        type="text"
                        placeholder="Enter Name "
                      />
                      <div className="display"><button className="btn grad mt-4" type="submit">
                    Submit
                  </button></div>
                    </Form>
                  </div>
                </div>
              </section>
            )}
          </Formik>
        )}
      </div>
      {/* <div style={body} className="form_element">

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
    </div> */}
      <Footer />
    </>
  );
};

export default ValorantReg;
