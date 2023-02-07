import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { TextField } from "../components/TextField";
import * as Yup from "yup";
import { RingLoader } from "react-spinners";
import "../styles/Form.css";
import Valo from "../assets/pool.png";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase";
import axios from "axios";



const BallpoolReg = () => {
  const [user, setUser] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validate = Yup.object({
    name: Yup.string().max(50, "Must be 50 characters or less").required("Required"),
    phone: Yup.string().max(14, "Phone number is not valid").required("Required"),
    ballpoolUID: Yup.string().max(50, "Must be 50 characters or less").required("Required"),
    camAmb: Yup.string().max(30, "Must be 30 characters or less")
  })

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
            player2IName: "",
            player2ID: "",
            player3IName: "",
            player3ID: "",
            player4IName: "",
            player4ID: "",
            player5IName: "",
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
                "https://versus-event.herokuapp.com/api/v1/828dc227520faa769b3226e8fc7f5431/registerBallPool",
                {
                  ...values,
                  email: user.email,
                },
                config
              );
              setLoading(false);
              navigate("/ballpool-register-success");
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
                  <h1>8Ball Pool Registration</h1>
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
                      label="8 Ball Pool UID*"
                      name="ballpoolUID"
                      type="number"
                      placeholder="Enter your 8 Ball Pool UID"
                    />
                    <TextField
                      label="Campus Ambassador Referral Code(Optional)"
                      name="camAmb"
                      type="text"
                      placeholder="Enter your  Referral Code"
                    />

                    

                    

                    <div className="display">
                      <button className="btn grad mt-4" type="submit">
                        Submit
                      </button>
                    </div>
                    {(
                      errors.name ||
                      errors.phone ||
                      errors.ballpoolUID ||
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
  )
}

export default BallpoolReg