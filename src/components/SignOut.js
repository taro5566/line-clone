import CallIcon from "@mui/icons-material/Call";
import { Button } from "@mui/material";
import React from "react";
import { auth } from "../firebase.js";

const SignOut = () => {
  return (
    <div className="header">
      {/* authの認証をサインアウトする */}
      <Button
        style={{ color: "white", fontSize: "15px" }}
        onClick={() => auth.signOut()}
      >
        サインアウト
      </Button>
      <h3>{auth.currentUser.displayName}</h3>
      <CallIcon />
    </div>
  );
};

export default SignOut;
