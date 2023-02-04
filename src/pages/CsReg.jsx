import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ErrorMessage,Formik, Form, Field } from "formik";
import { TextField } from "../components/TextField";
import * as Yup from "yup";
import { RingLoader } from "react-spinners";
import "../styles/Form.css";
import Valo from "../assets/cs.png";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase";
import axios from "axios";

const CsReg = () => {
  const [user, setUser] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validate = Yup.object({
    name: Yup.string().max(50, "Must be 50 characters or less").required("Required"),
    phone: Yup.string().max(14, "Phone number is not valid").required("Required"),
    teamName: Yup.string().max(50, "Must be 50 characters or less").required("Required"),
    player1Name: Yup.string().max(50, "Must be 50 characters or less").required("Required"),
    player2Name: Yup.string().max(50, "Must be 50 characters or less").required("Required"),
    player3Name: Yup.string().max(50, "Must be 50 characters or less").required("Required"),
    player4Name: Yup.string().max(50, "Must be 50 characters or less").required("Required"),
    player5Name: Yup.string().max(50, "Must be 50 characters or less").required("Required"),
  })

  useEffect(() => {
    window.scrollTo(0, 0);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
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
            player2Name: "",
            player3Name: "",
            player4Name: "",
            player5Name: "",

          }}
          validationSchema={validate}
          onSubmit={async (values) => {
            console.log(values);
            setLoading(true);
            const config = {
              headers: {
                "Content-Type": "application/json",
                Authorization: `${user.accessToken}`,
              },
            };

            try {
              await axios.post(
                "https://versus-event.herokuapp.com/api/v1/541c8f7749f16d70/registerCs",
                {
                  ...values,
                  email: user.email,
                },
                config
              );
              setLoading(false);
              navigate("/cs-register-success");
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
                  <h1>CS 1.6 Registration</h1>
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
                      label="Name*"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                    />
                    <TextField
                      label="Phone*"
                      name="phone"
                      type="text"
                      placeholder="Enter 10 digit phone number"
                    />
                    <TextField
                      label="Team Name*"
                      name="teamName"
                      type="text"
                      placeholder="Enter your team name"
                    />
                    <TextField
                      label="Player 1 Name*"
                      name="player1Name"
                      type="text"
                      placeholder="Enter player 1 name"
                    />
                    <TextField
                      label="Player 2 Name*"
                      name="player2Name"
                      type="text"
                      placeholder="Enter player 2 name"
                    />
                    <TextField
                      label="Player 3 Name*"
                      name="player3Name"
                      type="text"
                      placeholder="Enter player 3 name"
                    />
                    <TextField

                      label="Player 4 Name*"
                      name="player4Name"
                      type="text"
                      placeholder="Enter player 4 name"
                    />
                    <TextField

                      label="Player 5 Name*"
                      name="player5Name"
                      type="text"
                      placeholder="Enter player 5 name"
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
                      errors.player2Name ||
                      errors.player3Name ||
                      errors.player4Name ||
                      errors.player5Name
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
  )
}

export default CsReg