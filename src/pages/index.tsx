import { Login } from "@/templates/Login";
import { useSession } from "next-auth/react";

export default function IndexPage() {
  const { data: session } = useSession();

  return (
    <>
      <h1>{session && `${session.user?.email} ${session.user?.name} `}</h1>
      <Login />
    </>
  );
}
