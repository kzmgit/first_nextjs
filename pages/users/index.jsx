import Link from "next/link";

export default function Index({ users }) {
  return (
    <div>
      <h1>USER一覧</h1>
      <Link href={`/new`}>
        <a>ユーザー追加</a>
      </Link>
      <ul>
        {users.map((user) => (
          <di key={user.id}>
            <dt>
              <Link href={`/users/${user.id}`}>
                <a>{user.name}</a>
              </Link>
            </dt>
            <dd>{user.email}</dd>
          </di>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:3000/api/user/getAllUsers`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const users = await response.json();
  return { props: { users } };
}
