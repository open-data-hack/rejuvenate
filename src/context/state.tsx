import { createContext, useContext, useState } from "react";
import { stateContextType, IAddressToken, IAddressData } from "../types/state";

const contextDefaultValue: stateContextType = {
  allTokensData: {},
  addresses: [],
  setAllTokenData: () => null,
  setAddresses: () => null,
  loading: false,
  setLoading: () => null,
};

type StateContextProviderProps = {
  children: React.ReactNode;
};

const AppContext = createContext<stateContextType>(contextDefaultValue);

export function AppWrapper({ children }: StateContextProviderProps) {
  const [allTokensData, setAllTokenData] = useState<any>();
  const [addresses, setAddresses] = useState<IAddressData[]>();
  const [address, setAddress] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  let sharedState = {
    allTokensData,
    setAllTokenData,
    addresses,
    setAddresses,
    loading,
    setLoading,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
