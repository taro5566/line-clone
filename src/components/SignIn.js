import { Button } from "@mui/material/";
import LoginIcon from '@mui/icons-material/Login';
import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";

export const SignIn = () => {
  function signInWithGoogle() {
    // googleの認証のプロバイダーが使えるようになる
    const provider = new firebase.auth.GoogleAuthProvider();
    // ポップアップして認証機能を使う
    auth.signInWithPopup(provider);
  }

  return (
    <div className="signin-wrap">
      <Button variant="contained" startIcon={<LoginIcon />} onClick={signInWithGoogle}>Googleアカウントでログインする</Button>
    </div>
  );
};
