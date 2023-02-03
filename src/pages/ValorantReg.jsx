import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ErrorMessage,Formik, Form, Field } from "formik";
import { TextField } from "../components/TextField";
import * as Yup from "yup";
import { RingLoader } from "react-spinners";
import "../styles/Form.css";
import Valo from "../assets/VALO.png";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase";
import axios from "axios";

const ValorantReg = () => {
  const [user, setUser] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const validate = Yup.object({
    phone: Yup.string()
      .max(14, "Phone number is not valid")
      .required("Required"),
    teamName: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    player1Name: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    player1RiotID: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    player2Name: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    player2RiotID: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    player3Name: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    player3RiotID: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    player4Name: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    player4RiotID: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    player5Name: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    player5RiotID: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    player6Name: Yup.string().max(50, "Must be 50 characters or less"),
    player6RiotID: Yup.string().max(50, "Must be 50 characters or less"),
  });

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
              phone: "",
              teamName: "",
              player1Name: "",
              player1RiotID: "",
              player2Name: "",
              player2RiotID: "",
              player3Name: "",
              player3RiotID: "",
              player4Name: "",
              player4RiotID: "",
              player5Name: "",
              player5RiotID: "",
              player6Name: "",
              player6RiotID: "",
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
                  "https://versus-event.herokuapp.com/api/v1/fb6b78dc6d7cb36f2bd0373ce/registerValorant",
                  {
                    ...values,
                    email: user.email,
                  },
                  config
                );
                setLoading(false);
                navigate("/");
              } catch (error) {
                console.log(error);
                setLoading(false);
              }
            }}
          >
            {({ errors, touched }) => (
              <section id="appform">
                <div className="container">
                  <div className="header mt-3 mb-4">
                    <h1>Valorant Registration</h1>
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
                        label="Team Name*"
                        name="teamName"
                        type="text"
                        placeholder="Enter Team Name"
                      />
                      <TextField
                        label="Player1 Name*"
                        name="player1Name"
                        type="text"
                        placeholder="Enter Player1 Name "
                      />
                      <TextField
                        label="Player1 Riot ID*"
                        name="player1RiotID"
                        type="text"
                        placeholder="BRIMSTONE #1234"
                      />
                      <TextField
                        label="Player2 Name*"
                        name="player2Name"
                        type="text"
                        placeholder="Enter Player2 Name "
                      />
                      <TextField
                        label="Player2 Riot ID*"
                        name="player2RiotID"
                        type="text"
                        placeholder="JETT #1234"
                      />
                      <TextField
                        label="Player3 Name*"
                        name="player3Name"
                        type="text"
                        placeholder="Enter Player3 Name "
                      />
                      <TextField
                        label="Player3 Riot ID*"
                        name="player3RiotID"
                        type="text"
                        placeholder="PHOENIX #1234"
                      />
                      <TextField
                        label="Player4 Name*"
                        name="player4Name"
                        type="text"
                        placeholder="Enter Player4 Name "
                      />
                      <TextField
                        label="Player4 Riot ID*"
                        name="player4RiotID"
                        type="text"
                        placeholder="SOVA #1234"
                      />
                      <TextField
                        label="Player5 Name*"
                        name="player5Name"
                        type="text"
                        placeholder="Enter Player5 Name "
                      />
                      <TextField
                        label="Player5 Riot ID*"
                        name="player5RiotID"
                        type="text"
                        placeholder="REYNA #1234"
                      />
                      <TextField
                        label="Player6 Name (substitute)"
                        name="player6Name"
                        type="text"
                        placeholder="Enter Player6 Name "
                      />
                      <TextField
                        label="Player6 Riot ID (substitute)"
                        name="player6RiotID"
                        type="text"
                        placeholder="OMEN #1234"
                      />

                      <div className="display">
                        <button className="btn grad mt-4" type="submit">
                          Submit
                        </button>
                      </div>
                      {(errors.phone ||
                        errors.teamName ||
                        errors.player1Name ||
                        errors.player1RiotID ||
                        errors.player2Name ||
                        errors.player2RiotID ||
                        errors.player3Name ||
                        errors.player3RiotID ||
                        errors.player4Name ||
                        errors.player4RiotID ||
                        errors.player5Name ||
                        errors.player5RiotID ||
                        errors.player6Name ||
                        errors.player6RiotID) && (
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

export default ValorantReg;
