import { useState, useEffect } from "react";
import "./App.css";
import News from "./components/News";


function _App() {
  // inputが２個あるので、入力したものを保持するためにuseStateが２つ必要
  const [name, setName] = useState("名前入力");
  const [email, setEmail] = useState("メールアドレス入力");
  // バックエンドからデータ取るとき、[]配列にする
  const [data, setData] = useState([]);

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

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos",
        );
        console.log(response, "response");
        // ここでjsの形に変換するjson()を行なっています
        const data = await response.json();
        console.log(data, "中身");
        // 取得したjsの形のデータをuseStateの更新の処理で上書きする
        setData(data);
      }catch(error) {

        // おまじないの処理の終わり、下は消さない
      }
    };

    // fetchDataを以下で動かします
    fetchData();
    // スプレッドシートAPIの記述を書いて、データを読み込む
    // この下は消さない
  }, []);

  console.log("順番の確認");

  return (
    <>
      {/*  */}
      <h1>データを表示する方法</h1>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.id}</p>
          <p>{item.title}</p>
          <p>{item.userId}</p>
        </div>
      ))}

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

export default _App;
