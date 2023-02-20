import { Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import firebase from "firebase/compat/app";
import React, { useState } from "react";
import {db,auth} from "../firebase.js"

const SendMessage = () => {
  const [message, setMessage] = useState("");

  function sendMessage(e) {
    // onSubmitで自動的にリロードされるのを止める記述
    e.preventDefault();
    // dbのmessagesに対して追加する

    // authで認証情報を取得
    const {uid,photoURL} = auth.currentUser;

    db.collection("messages").add({
      text:message,
      photoURL,
      uid,
      // 時刻の取得
      createdAt:firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessage("")

  }

  return (
    <div>
      <form className="sendMsg" onSubmit={sendMessage}>
        <Input
          type="text"
          placeholder="メッセージを入力してください"
          // set関数でeのvalueを取得してmassageへ設定出来る
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          style={{
            width: "78%",
            fontSize: "15px",
            fontWeight: "550",
            marginLeft: "5px",
            marginBottom: "-3px",
          }}
        />
        <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }}/>
      </form>
    </div>
  );
};

export default SendMessage;
