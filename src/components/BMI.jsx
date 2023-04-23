import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BMI() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState("");

  // Notify Function
  const notify = () => {
    return toast.info(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  };

  //   Form Handler
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (weight === 0) {
      toast.error("Please Enter Your Weight!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    } else if (height === 0) {
      toast.error("Please Enter Your Height!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    } else {
      const value = (weight / (height * height)).toFixed(2);
      setBmi(value);
      //
      if (bmi > 0 && bmi < 18.5) {
        setMessage("You are underweight!");
        notify();
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("You are normal!");
        notify();
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are overweight");
        notify();
      } else if (bmi > 30) {
        setMessage("You are obese!");
        notify();
      }
    }
  };

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
            <div className="mt-3 p-4 border">
              <form
                className="needs-validation"
                action=""
                method="POST"
                onSubmit={onFormSubmit}
                // noValidate
              >
                <h2 className="fw-bold mb-1">
                  BMI Finder
                  <i className="fa-solid fa-arrow-right-to-bracket"></i>
                </h2>
                <hr />

                <div className="form-outline mb-3">
                  <label className="form-label" for="weight">
                    Weight(in kg)
                  </label>
                  <input
                    type="Weight"
                    className="form-control"
                    id="exampleInputWeight1"
                    aria-describedby="WeightHelp"
                    onChange={(e) => setWeight(e.target.value)}
                    name="weight"
                    value={weight}
                    // required
                  />
                </div>
                <p className="text-danger"></p>

                <div className="form-outline mb-3">
                  <label className="form-label" for="Height1">
                    Height(in m)
                  </label>
                  <input
                    type="Height"
                    className="form-control"
                    id="exampleInputHeight1"
                    onChange={(e) => setHeight(e.target.value)}
                    name="height"
                    value={height}
                    // required
                  />
                </div>
                <p className="text-danger"></p>

                <div className="d-grid mb-3">
                  <button className="btn btn-success px-3" type="submit">
                    Calculate
                  </button>
                </div>
              </form>
              <h3 className="text-center">Your BMI is: {bmi}</h3>
              {message ? (
                <p className="text-center text-bold">{message}</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default BMI;
