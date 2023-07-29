import { onAuthStateChanged, signOut, updatePassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth  } from "../firebase";
import { Button, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Header from "./Header";

export default function Dashboard() {

  const [authUser, setAuthUser] = useState(null);
  const [newPassword, setNewPassword] = useState(""); // New password state
  const navigate = useNavigate();  // To navigate  

  // Checks if user is logged in.
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  // Signout button fucntionality
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  // Change password functionality
  const handlePasswordUpdate = () => {
    if (!newPassword) {
      toast.error("Please Enter New Password")
      return;
    }

    updatePassword(authUser, newPassword)
      .then(() => {
        toast.success("Password Updated Successfully")
        setNewPassword(""); // Clear the new password field after successful update
      })
      .catch((error) => {
        console.log("Error updating password:", error.message);
      });
  };

  return (
    <div>
      {authUser ? (
        <>
          <Header />

          <div>
            <Typography variant="h4" style={{color:"whitesmoke", padding:10}} >{`Welcome, ${authUser.email}`}</Typography>
            <Button variant="contained" style={{marginBottom:20}} onClick={userSignOut}>Sign Out</Button>
            <br/>

            <div style={{border:'1px solid white', width: '40%', marginLeft: 'auto', marginRight:'auto'}}>
              <TextField
                required
                type="password"
                label="Enter your new password"
                variant="standard"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                inputProps={{ style: { color: 'white' } }}
                sx={{ "label": { "color": "gray" } }}
              /><br/><br/>

              <Button variant="contained" style={{marginBottom:20}} onClick={handlePasswordUpdate} >Change Password</Button>
            </div>
          </div>
              
        </>
      ) : (
        <Typography style={{color:"whitesmoke", padding:10}}>Signed Out</Typography>
      )}
    </div>
  );
};


