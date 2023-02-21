import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { TextField } from "../components/TextField";
import * as Yup from "yup";
import { RingLoader } from "react-spinners";
import "../styles/Form.css";
import Valo from "../assets/bgmi.png";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase";
import axios from "axios";

const BgmiReg = () => {
  const [user, setUser] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validate = Yup.object({
    name: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    phone: Yup.string()
      .max(14, "Phone number is not valid")
      .required("Required"),
    teamName: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    player1Name: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    player1ID: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    player2Name: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    player2ID: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    player3Name: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    player3ID: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    player4Name: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    player4ID: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    player5Name: Yup.string()
      .max(50, "Must be 50 characters or less"),
      
    player5ID: Yup.string()
      .max(50, "Must be 50 characters or less"),

    camAmb: Yup.string().max(30, "Must be 30 characters or less"),
      
  });


  useEffect(() => {
    window.scrollTo(0, 0);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // console.log(user);
      } else {
        navigate("/");
      }
    });
  }, [navigate, user]);

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
            // email: "",
            name: "",
            phone: "",
            teamName: "",
            player1Name: "",
            player1ID: "",
            player2Name: "",
            player2ID: "",
            player3Name: "",
            player3ID: "",
            player4Name: "",
            player4ID: "",
            player5Name: "",
            player5ID: "",
            camAmb:""
          }}
          validationSchema={validate}
          onSubmit={async (values) => {
            // console.log(values);
            setLoading(true);
            const config = {
              headers: {
                "Content-Type": "application/json",
                Authorization: `${user.accessToken}`,
              },
            };

            try {
              await axios.post(
                "https://versus2k23-backend.onrender.com/api/v1/8fb6b78dc6d7cb36f2bd0373ce496aa5/registerBgmi",
                {
                  ...values,
                  email: user.email,
                },
                config
              );
              setLoading(false);
              navigate("/bgmi-register-success");
            } catch (error) {
              console.log(error);
              setLoading(false);
              navigate('/register-fail')
            }
          }}
        >
          {({ errors, touched }) => (
            <section id="appform">
              <div className="container">
                <div className="header mt-3 mb-4">
                  <h1>BGMI Registration</h1>
                </div>
                <div className="display">
                  <img src={Valo} alt="valo" />
                  <Form className="mt-0 drop drop1 col-lg-8 mb-4 ">
                    <TextField
                      label="Email*"
                      name="email"
                      type="email"
                      value={user.email}
                      placeholder="abc@gmail.com"
                      disabled
                    />
                   
                    <TextField
                      label="Phone*"
                      name="phone"
                      type="text"
                      placeholder="Enter 10 digit phone number"
                    />
                    <TextField
                      label="Name*"
                      name="name"
                      type="text"
                      placeholder="Enter your Name"
                    />
                    <TextField
                      label="Team Name*"
                      name="teamName"
                      type="text"
                      placeholder="Enter your Team Name"
                    />
                    <TextField
                      label="Player 1 Name*"
                      name="player1Name"
                      type="text"
                      placeholder="Enter Player 1 Name"
                    />
                    <TextField
                      label="Player 1 BGMI ID*"
                      name="player1ID"
                      type="number"
                      placeholder="Enter Player 1 BGMI ID"
                    />
                    <TextField
                      label="Player 2 Name*"
                      name="player2Name"
                      type="text"
                      placeholder="Enter Player 2 Name"
                    />
                    <TextField
                      label="Player 2 BGMI ID*"
                      name="player2ID"
                      type="number"
                      placeholder="Enter Player 2 BGMI ID"
                    />
                    <TextField
                      label="Player 3 Name*"
                      name="player3Name"
                      type="text"
                      placeholder="Enter Player 3 Name"
                    />
                    <TextField
                      label="Player 3 BGMI ID*"
                      name="player3ID"
                      type="number"
                      placeholder="Enter Player 3 BGMI ID"
                    />
                    <TextField
                      label="Player 4 Name*"
                      name="player4Name"
                      type="text"
                      placeholder="Enter Player 4 Name"
                    />
                    <TextField
                      label="Player 4 BGMI ID*"
                      name="player4ID"
                      type="number"
                      placeholder="Enter Player 4 BGMI ID"
                    />
                    <TextField
                      label="Player 5 Name optional (substiute)"
                      name="player5Name"
                      type="text"
                      placeholder="Enter Player 5 Name"
                    />
                    <TextField
                      label="Player 5 BGMI ID optional (substiute)"
                      name="player5ID"
                      type="number"
                      placeholder="Enter Player 5 BGMI ID"
                    />
                    <TextField
                      label="Campus Ambassador Referral Code(Optional)"
                      name="camAmb"
                      type="text"
                      placeholder="Enter Campus Ambassador Referral Code"
                    />

                    

                    <div className="display">
                      <button className="btn grad mt-4" type="submit">
                        Submit
                      </button>
                    </div>
                    {(
                      errors.name ||
                      errors.phone ||
                      errors.teamName ||
                      errors.player1Name ||
                      errors.player1ID ||
                      errors.player2Name ||
                      errors.player2ID ||
                      errors.player3Name ||
                      errors.player3ID ||
                      errors.player4Name ||
                      errors.player4ID ||
                      errors.player5Name ||
                      errors.player5ID ||
                      errors.camAmb
                    ) && (
                        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}><span className="error mt-3 mb-3">Mandatory Fields Required </span></div>
                    )}
                  </Form>
                </div>
              </div>
            </section>
          )}
        </Formik>
      )}
    </div>

    <Footer />
  </>
  );
};

export default BgmiReg;
