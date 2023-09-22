export interface IAddressToken {
  Link: string;
  Usdt: string;
  Dai: string;
  address: string;
}

export interface IAddressData {
  address: string;
}

export type stateContextType = {
  addresses: IAddressData[] | undefined;
  allTokensData: any;
  loading: boolean;
  setAllTokenData: (data: any) => void;
  setAddresses: (data: IAddressData[]) => void;
  setLoading: (data: boolean) => void;
};

