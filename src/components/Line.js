import React, { useEffect, useState } from "react";
import SignOut from "./SignOut";
import { db, auth } from "../firebase.js";
import SendMessage from "./SendMessage";

export const Line = () => {
  // メッセージの保存でuseStateを使う
  const [messages, setMessages] = useState([]);
  // 初回の表示を設定したいのでuseEffectを使う（第二引数になにも入れないので初回マウント時のみ）
  useEffect(() => {
    // dbにアクセスしてデータを取ってくる（取ってくるデータはmessages）
    db.collection("messages")
      // メッセージを格納する順番の指定にorderByで指定（順番は日時のcreatAtに指定）
      .orderBy("createdAt")
      // 最大表示件数（50件）
      .limit(50)
      // テキスト情報以外のデータを取得する
      .onSnapshot((snapshot) => {
        // docsに複数のデータが入っている、それをmap関数で順番に取り出し
        //変数docの中に入れて、doc.dataで取り出してmessagesに入れている
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div>
      {console.log(messages)}
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            <div
              key={id}
              className={`msg ${
                // 三項演算子でuidが認証しているuidを一緒なら送信側、falseなら受信側
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
};
