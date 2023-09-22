import React, { useState } from "react";
import "./App.css";
import { TextField, Stack, Button } from "@mui/material";

function App() {
  const [interest, setInterest] = useState(0);
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [principleValid, setPrincipleValid] = useState(true);
  const [rateValid, setRateValid] = useState(true);
  const [timeValid, setTimeValid] = useState(true);
  console.log(principle);
  const handleInterest = (e) => {
    e.preventDefault();
    if (!principle || !rate || !time) {
      alert("Please fill the form");
    } else {
      setInterest((principle * rate * time) / 100);
    }
  };
  const handleReset = () => {
    setInterest(0);
    setPrinciple(0);
    setRate(0);
    setTime(0);
    setPrincipleValid(true)
    setRateValid(true)
    setTimeValid(true)
  };
  const validInput = (e) => {
    const { name, value } = e.target;
    if (!!value.match(/^[0-9]+$/)) {
      if (name === "Principle") {
        setPrinciple(value);
        setPrincipleValid(true);
      } else if (name === "Rate") {
        setRate(value);
        setRateValid(true);
      } else {
        setTime(value);
        setTimeValid(true);
      }
    } else {
      if (name === "Principle") {
        setPrinciple(value);
        setPrincipleValid(false);
      } else if (name === "Rate") {
        setRate(value);
        setRateValid(false);
      } else {
        setTime(value);
        setTimeValid(false);
      }
    }
  };

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center bg-dark"
    >
      <div style={{ width: "500px" }} className=" bg-light rounded p-5">
        <div className="heading">
          <h3>Simple Interest Calculator</h3>
          <p>Calculate your simple interest easily</p>
        </div>
        <div className="interest-card d-flex flex-column w-100 justify-content-center align-items-center rounded bg-danger text-light shadow">
          <h1>₹ {interest}</h1>
          <p className="fw-bold">Total Simple Interest</p>
        </div>
        <form className="mt-5" onSubmit={(e) => handleInterest(e)}>
          <div className="mb-3">
            <TextField
              className="w-100"
              id="outlined-basic"
              value={principle || ""}
              name="Principle"
              label="₹ Principal amount"
              variant="outlined"
              onChange={(e) => validInput(e)}
            />
          </div>
          {!principleValid && (
            <div className="mb-3 text-danger">*Invalid Input*</div>
          )}

          <div className="mb-3">
            <TextField
              className="w-100"
              id="outlined-basic"
              value={rate || ""}
              name="Rate"
              label="₹ Rate of interest (p.a) %"
              variant="outlined"
              onChange={(e) => validInput(e)}
            />
          </div>
          {!rateValid && (
            <div className="mb-3 text-danger">*Invalid Input*</div>
          )}
          <div className="mb-3">
            <TextField
              className="w-100"
              id="outlined-basic"
              value={time || ""}
              name="Time"
              label="₹ Time period (yr)"
              variant="outlined"
              onChange={(e) => validInput(e)}
            />
          </div>
          {!timeValid && (
            <div className="mb-3 text-danger">*Invalid Input*</div>
          )}
          <Stack direction="row" spacing={2}>
            <Button
              type="submit"
              className="bg-dark"
              style={{ width: "200px", height: "75px" }}
              variant="contained"
              disabled={
                principleValid && rateValid && timeValid && timeValid
                  ? false
                  : true
              }
            >
              Calculate
            </Button>
            <Button
              style={{ width: "200px", height: "75px" }}
              variant="outlined"
              onClick={handleReset}
            >
              RESET
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default App;
