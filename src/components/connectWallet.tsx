import { useEffect } from "react";
import { WagmiConfig, createConfig, useAccount } from "wagmi";
import useTokens from "@/utils/hooks/tokens";
import { useAppContext } from "@/context/state";

const AddWalletAddress = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const { getAllTokensBalance } = useTokens();
  useEffect(() => {
    getAllTokensBalance(address);
  }, [address, getAllTokensBalance]);
  const { allTokensData } = useAppContext();
  return (
    <div className='w-full'>
      {" "}
      {address && (
        <div className='w-full flex flex-col items-center'>
          <div
            className='mt-10 w-[500px] flex gap-20 justify-between'
            style={{
              marginTop: "70px",
              marginBottom: "20px",
              width: "300px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>Token Name</div>
            <div className='ml-10' style={{ marginLeft: "90px" }}>
              Qty
            </div>
          </div>
          <div
            className='w-[500px] flex justify-between'
            style={{
              marginBottom: "10px",
              width: "300px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>Ethereum ETH</p>
            <div className='ml-10' style={{ marginLeft: "90px" }}>
              {allTokensData?.Link}
            </div>
          </div>
          <div
            className='w-[500px] flex justify-between'
            style={{
              marginBottom: "10px",
              width: "300px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>Tether USDT</p>
            <div className='ml-10' style={{ marginLeft: "90px" }}>
              {allTokensData?.Link}
            </div>
          </div>
          <div
            className='w-[500px] flex justify-between'
            style={{
              marginBottom: "10px",
              width: "300px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>Dai</p>
            <div className='ml-10' style={{ marginLeft: "90px" }}>
              {allTokensData?.dai}
            </div>
          </div>
          <div
            className='w-[500px] flex justify-between'
            style={{
              marginBottom: "10px",
              width: "300px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>Link LNK</p>
            <div className='ml-10' style={{ marginLeft: "90px" }}>
              {allTokensData?.Link}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddWalletAddress;
