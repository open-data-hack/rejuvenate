'use client';
import { createContext, useContext, useState } from 'react';
import { stateContextType } from '../types/state';
import { NearSocialBridgeProvider, Spinner } from 'near-social-bridge';
import 'near-social-bridge/near-social-bridge.css';

const contextDefaultValue: stateContextType = {
  allTokensData: {},
  address: '',
  setAllTokenData: () => null,
  setAddress: () => null,
  loading: false,
  setLoading: () => null,
};

type StateContextProviderProps = {
  children: React.ReactNode;
};

const AppContext = createContext<stateContextType>(contextDefaultValue);

export function AppWrapper({ children }: StateContextProviderProps) {
  const [allTokensData, setAllTokenData] = useState<any>();
  const [address, setAddress] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  let sharedState = {
    allTokensData,
    setAllTokenData,
    address,
    setAddress,
    loading,
    setLoading,
  };

  return (
    <NearSocialBridgeProvider fallback={<Spinner />}>
      <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
    </NearSocialBridgeProvider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
