import { CloseMenuMobileIcon, MenuMobileIcon } from "@/assets";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "..";

export const Header = () => {
  const { data: session } = useSession();
  const [toggleMenu, setToggleMenu] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    setToggleMenu(false);
  };

  const handleClick = () => {
    router.push("/create");
    setToggleMenu(false);
  };

  return (
    <>
      <header>
        {session?.user ? (
          <>
            {toggleMenu ? (
              <div className="h-screen w-screen content-center p-2">
                <div className=" flex flex-wrap justify-around p-2">
                  <Image
                    alt="Close Menu"
                    src={CloseMenuMobileIcon}
                    placeholder="empty"
                    height={40}
                    width={40}
                    onClick={() => setToggleMenu(!toggleMenu)}
                  />
                  <h2 className="mt-2 font-bold">To do List</h2>
                  <Image
                    src={session.user.image as string}
                    alt="Menu mobile Icon"
                    placeholder="empty"
                    width={40}
                    height={40}
                    className="rounded-full"
                    onClick={handleClick}
                  />
                </div>
                <Button text="Desconectar" onClick={handleLogout} />
              </div>
            ) : (
              <div className="MOBILE flex items-center justify-around p-2">
                <Image
                  src={MenuMobileIcon}
                  placeholder="empty"
                  alt="Menu mobile Icon"
                  onClick={() => setToggleMenu(!toggleMenu)}
                />
                <h2 className="mt-2 font-bold">To do List</h2>
                <Image
                  src={session.user.image as string}
                  alt="Menu mobile Icon"
                  placeholder="empty"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                  onClick={handleClick}
                />
              </div>
            )}
          </>
        ) : (
          ""
        )}
      </header>
    </>
  );
};
