import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';
import {
  BMAC_ABI,
  BMAC_ADDRESS,
  CHAIN_NAME,
  IS_DEVELOPMENT,
} from './constants';

export const getCurrentChain = async () => {
  try {
    const eProvider: any = await detectEthereumProvider();

    if (eProvider !== (window as any).ethereum) {
      console.error('Do you have multiple wallets installed?');
      return CHAIN_NAME.UNKNOWN;
    }

    const chainId = eProvider.networkVersion;

    switch (chainId) {
      case '1' || 1:
        return CHAIN_NAME.ETHEREUM;
      case '56' || 56:
        return CHAIN_NAME.BINANCE;
      case '137' || 137:
        return CHAIN_NAME.POLYGON;
      case '31337' || 31337:
        return CHAIN_NAME.LOCALHOST;
      case '80001' || 80001:
        return CHAIN_NAME.POLYGON_TEST;
      default:
        return CHAIN_NAME.UNKNOWN;
    }
  } catch (e) {
    console.error(e);
    return CHAIN_NAME.UNKNOWN;
  }
};

export const getBMAC = async () => {
  try {
    const chain = await getCurrentChain();

    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );
    const signer = provider.getSigner();
    const contract = new ethers.Contract(BMAC_ADDRESS, BMAC_ABI, signer);

    if (chain === CHAIN_NAME.ETHEREUM || chain === CHAIN_NAME.LOCALHOST) {
      return contract;
    }

    return null;
  } catch (err) {
    if (IS_DEVELOPMENT) {
      console.error(err);
    }
    return null;
  }
};
