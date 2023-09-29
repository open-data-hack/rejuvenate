
"use client";

import { Link } from "@chakra-ui/next-js";
import RejuvenateAi from "../../images/svg/rejuvenate-logo.svg";
//import { useWallet} from "@/hooks/useWallet";
import { useAppContext } from "@/context/state";
import RegisterForm from "../register-form";
import { useAccount, useNetwork } from "wagmi";
//import Link from "next/link";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from "@rainbow-me/rainbowkit";



const Header = ({bg='transparent'}:{bg?:string}) => {

  //  const { address, isConnected} = useAccount();
  //  //const { address } = useAppContext();

   const { openConnectModal } = useConnectModal();
   const { openAccountModal } = useAccountModal();
   const { openChainModal } = useChainModal();
   const { isConnected, address } = useAccount();
   const { chain } = useNetwork();
 
  


  return (
    <section className={`bg-${bg} px-2 max-w-[1300px] w-full py-1 flex justify-between items-center mx-auto`}>
        <div>
          <Link href={'/'} textDecor={'none'}>
            <RejuvenateAi />
          </Link>
        </div>
       {
        openConnectModal && address ? (
           <button onClick={openConnectModal} className="bg-[#014421] h-[48px] px-5 lg:h-[50px] font-bold text-base lg:text-[20px] text-[#F5F5DC] rounded-xl">
            Connect Wallet

        </button>
        ) : (
        <>
          <label  className="btn bg-[#014421] h-[48px] px-5 lg:h-[50px] font-bold text-base lg:text-[20px] text-[#F5F5DC] rounded-xl" htmlFor="modal-1"> Register</label>
          <input className="modal-state" id="modal-1" type="checkbox" />
        </>
        )
       }
    <RegisterForm />
    
    </section>
  );
};

export default Header;