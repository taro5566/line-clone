import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";
import { Line } from "./components/Line";
import { SignIn } from "./components/SignIn";

function App() {
  // 認証の情報を定数に入れる
  const [user] = useAuthState(auth);
  // 三項演算子でUSERの中身があるtrueなら<Line />へ、falseなら<SignIn />へ飛ばす
  return <div>{user ? <Line /> : <SignIn />}</div>;
}

export default App;
