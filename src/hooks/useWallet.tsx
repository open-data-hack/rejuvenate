'use client';

import { Mode, SignMethod, RESOURCE } from '@dataverse/runtime-connector';
import { useContext, useState } from 'react';
import { DataverseContext } from '../context/dataverse';
import { useAppContext } from '@/context/state';

import { DataverseConnector, WALLET } from '@dataverse/dataverse-connector';

export function useWallet() {
  const { runtimeConnector } = useContext(DataverseContext);
  const { setAddress } = useAppContext();
  const [wallet, setWallet] = useState<WALLET>();

  const switchNetwork = async (chainId: number) => {
    const res = await runtimeConnector?.switchNetwork(chainId);
    return res;
  };

  const sign = async (params: { method: SignMethod; params: any[] }) => {
    const res = await runtimeConnector?.sign(params);
    return res;
  };

  const contractCall = async (params: {
    contractAddress: string;
    abi: any[];
    method: string;
    params: any[];
    mode?: Mode | undefined;
  }) => {
    const res = await runtimeConnector?.contractCall(params);
    return res;
  };

  const ethereumRequest = async (params: { method: string; params?: any }) => {
    const res = await runtimeConnector?.ethereumRequest(params);
    return res;
  };

  const getPKP = async () => {
    const res = await runtimeConnector?.getPKP();
    return res;
  };

  const getCurrentPkh = async () => {
    const res = await runtimeConnector?.wallet.getCurrentPkh();
    console.log(res);
    return res;
  };

  const executeLitAction = async (params: {
    code: string;
    jsParams: object;
  }) => {
    const res = await runtimeConnector?.executeLitAction(params);
    return res;
  };

  return {
    wallet,
    switchNetwork,
    contractCall,
    ethereumRequest,
    getPKP,
    executeLitAction,
    sign,
    getCurrentPkh,
  };
}
