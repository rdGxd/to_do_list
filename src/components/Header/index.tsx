import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Button } from "..";

export const Header = () => {
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <>
      <header>
        {session?.user && (
          <>
            <div className="MOBILE flex items-center justify-around p-2">
              <h1 className="mt-2 font-bold lg:text-2xl">To do List</h1>
              <Image
                src={session.user.image as string}
                alt="Menu mobile Icon"
                placeholder="empty"
                width={40}
                cursor-pointer
                height={40}
                className="h-10 w-10 cursor-pointer rounded-full lg:h-16 lg:w-16"
              />
              <Button text="Sair" type="button" onClick={handleLogout} />
            </div>
          </>
        )}
      </header>
    </>
  );
};
