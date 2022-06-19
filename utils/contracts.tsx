import { ethers } from 'ethers';
import { BMAC_ABI, BMAC_ADDRESS, IS_DEVELOPMENT } from './constants';

export default async function getBMAC() {
  try {
    if (typeof window.ethereum === 'undefined') {
      console.error('MetaMask is not installed!');
      return null;
    }

    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );
    const signer = provider.getSigner();
    const contract = new ethers.Contract(BMAC_ADDRESS, BMAC_ABI, signer);

    return contract;
  } catch (err) {
    if (IS_DEVELOPMENT) {
      console.error(err);
    }
    return null;
  }
}
