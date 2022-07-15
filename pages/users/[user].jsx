import { PrismaClient } from "@prisma/client";
import Link from "next/link";

export default function user({ user }) {
  return (
    <div>
      <h1>USER(詳細) {user.id}</h1>
      <Link href={`/users`}>
        <a>戻る</a>
      </Link>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(`http://localhost:3000/api/user/getOneUser`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      id: params.user,
    },
  });
  const user = await response.json();
  if (!user) {
    return {
      notFound: true,
    };
  } else {
    return { props: { user } };
  }
}
