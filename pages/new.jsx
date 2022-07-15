import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function New() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onClickSubmit = async (e) => {
    const data = { name, email };
    await fetch(`/api/user/createUser`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const user = json;
        router.push(`/users/${user.id}`);
      });
  };

  return (
    <>
      <h1>ユーザー追加</h1>
      <Link href={`/users`}>
        <a>ユーザー一覧へ</a>
      </Link>
      <div>
        <label>名前</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChangeName}
          placeholder="名前を入れてください"
        />
        <br />
        <label>メール</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={onChangeEmail}
          size={30}
          placeholder="メールアドレスを入れてください"
        />
        <br />
        <button type="submit" onClick={onClickSubmit}>
          追加
        </button>
      </div>
    </>
  );
}
