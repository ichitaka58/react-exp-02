import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import News from "./components/News";

function App() {
  // inputが２個あるので、入力したものを保持するためにuseStateが２つ必要
  const [name, setName] = useState("名前入力");
  const [email, setEmail] = useState("メールアドレス入力");

  // イベント処理＝クリックしたらXXXする,マウスを動かしたらXXXする,マウスが離れたら

  const handleNameChange = (e) => {
    // 処理を書きます
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    // 処理を書きます
    setEmail(e.target.value);
  };

  useEffect(() => {
    // この中に書きます
    console.log("起動しました!!!!");
    // スプレッドシートAPIの記述を書いて、データを読み込む
    // この下は消さない
  }, []);

  console.log("順番の確認");

  return (
    <>
      {/*  */}
      <News />
      <div>
        <p>名前が入ります</p>
        <input
          type="text"
          placeholder="名前を入力してください"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <p>メールアドレスが入ります</p>
        <input
          type="text"
          placeholder="メールアドレスを入力してください"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      {/*  */}
    </>
  );
}

export default App;
