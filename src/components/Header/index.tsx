import { CloseMenuMobileIcon, MenuMobileIcon } from "@/assets";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "..";

export const Header = () => {
  const { data: session } = useSession();
  const [mobileMenu, setMobileMenu] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <>
      <header>
        {session?.user && (
          <>
            {mobileMenu ? (
              <>
                <div className="min-w-screen flex min-h-screen items-center justify-around">
                  <Image
                    alt="Close Menu"
                    src={CloseMenuMobileIcon}
                    className="h-10 w-8"
                    onClick={() => setMobileMenu(!mobileMenu)}
                  />
                  <h2 className="font-bold ">To do List</h2>
                  <Image
                    src={session.user.image as string}
                    alt="Menu mobile Icon"
                    width={40}
                    height={40}
                    className="rounded-full"
                    onClick={() => router.push("/create")}
                  />
                </div>
              </>
            ) : (
              <div className="MOBILE flex items-center justify-around p-2">
                <Image
                  src={MenuMobileIcon}
                  alt="Menu mobile Icon"
                  onClick={() => setMobileMenu(!mobileMenu)}
                />
                <Button
                  text="Desconectar"
                  type="button"
                  onClick={handleLogout}
                />
                <Image
                  src={session.user.image as string}
                  alt="Menu mobile Icon"
                  width={40}
                  height={40}
                  className="rounded-full"
                  onClick={() => router.push("/create")}
                />
              </div>
            )}
          </>
        )}
      </header>
    </>
  );
};
