import React from "react";
import { useContext } from "react";
//wallet connection
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

type Props = {};

export default function Enter() {
  const address = useAddress();

  return (
    <div>
      <main>{address ? <SignOutButton /> : <SignInButton />}</main>
    </div>
  );
}

// Sign in with Google button
function SignInButton({}: Props) {
  //wallett connection
  const connectWithMetmask = useMetamask();
  const address = useAddress();

  return (
    <div className="flex flex-col items-center">
      <div className="text-[22px] mt-[20px] text-center ">
        Accedi ora come preferisci
      </div>

      <button
        onClick={connectWithMetmask}
        className="connenctWalletBtn p-[20px] m-[20px] lg:m-[10rem] md:m-[15px] sm:m-[5px] shadow-md rounded-[12px] hover:p-[15px] origin-top"
      >
        Connettiti con Metamask
      </button>
    </div>
  );
}

// Sign out button
function SignOutButton() {
  const address = useAddress();
  const disconnect = useDisconnect();
  return (
    <div className="flex flex-col justify-center items-center">
      <button className="connenctWalletBtn p-[20px] m-[20px] lg:m-[10rem] md:m-[15px] sm:m-[5px] shadow-md rounded-[12px] hover:p-[15px] origin-top">
        👋🏻 {address?.slice(0, 5) + "..." + address?.slice(-4)}
      </button>
      <button onClick={disconnect}>Disconnetti</button>
    </div>
  );
}
