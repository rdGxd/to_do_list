import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Create() {
  const { data: session } = useSession();
  const { push } = useRouter();

  useEffect(() => {
    if (!session?.user) push("/");
  });

  return (
    <>
      <h1>CREATE</h1>
    </>
  );
}
