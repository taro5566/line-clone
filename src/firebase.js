import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCb61e0xLh9zQQ7ge4r1whFya55-u4REzk",
  authDomain: "line-clone-test-ef98b.firebaseapp.com",
  projectId: "line-clone-test-ef98b",
  storageBucket: "line-clone-test-ef98b.appspot.com",
  messagingSenderId: "1098530272057",
  appId: "1:1098530272057:web:869bc7f263dda42a376ee8",
});

// firebaseのデータベースを保存(lineのテキスト、ID、画像など)
const db = firebaseApp.firestore();

// 認証情報（どのUSERが認証しているのかの情報）
const auth = firebase.auth();

export { db, auth };
