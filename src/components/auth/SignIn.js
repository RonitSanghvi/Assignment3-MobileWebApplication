import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { TextField, Button, Typography, Paper, Container } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  
  const navigate = useNavigate();  // To navigate
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        toast.success("Logged in Success")
        navigate('/dashboard')
      })
      .catch((error) => {
        console.log("Message from firebase: ", error.message);
        toast.error(error.message)
      });
  };

  return (
    <Container>
      <Paper className="sign-in-container" elevation={5} style={{paddingBottom: 20, paddingTop: 20, background: "#111827", marginBottom: 20}}>
        <form onSubmit={signIn}>
          
          <Typography align="center" variant="h2" style={{color: 'white', fontWeight: 'bold'}}> Log In to your Account</Typography>

          <TextField 
            required
            type="email" 
            label="Enter Your Email" 
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

          <Button style={{marginTop:20}} variant="contained" type="submit">Log In</Button>

        </form>
      </Paper>
    </Container>
  );
};

export default SignIn;