import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { TextField, Button, Typography, Paper, Container } from "@mui/material";
import { toast } from "react-toastify";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        toast.success("Account Created")
        setEmail('')
        setPassword('')
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message)
      });
  };

  return (
    <Container>
      <Paper elevation={5} style={{paddingBottom: 20, paddingTop: 20, background: "#111827"}} className="sign-in-container">
        <form onSubmit={signUp}>
          <Typography align="center" variant="h2" style={{color: 'white', fontWeight: 'bold'}}> Create Account</Typography>

          <TextField
            required
            type="email"
            label="Enter your email"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            inputProps={{style:{color: 'white'}}}
            sx={{ "label": {"color":"gray"} }}
          />
          <br/>
          <TextField
            required
            type="password"
            label="Enter your password"
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            inputProps={{style:{color: 'white'}}}
            sx={{ "label": {"color":"gray"} }}
          />
          <br/>
          <Button style={{marginTop:20}} variant="contained" type="submit">Sign Up</Button>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;
