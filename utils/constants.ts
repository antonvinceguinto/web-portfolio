import BMAC from '../artifacts/contracts/BuyMeACoffee.sol/BuyMeACoffee.json';

export const IS_DEVELOPMENT =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export const BMAC_ABI = BMAC.abi;

export const BMAC_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
// export const BMAC_ADDRESS = '0x6eF01B23dAc7D76b9369858548622E3Ec10F3e70';

export const CHAIN_NAME = {
  ETHEREUM: 'Ethereum Mainnet',
  BINANCE: 'Binance Smart Chain',
  POLYGON: 'Polygon Mainnet',
  POLYGON_TEST: 'Polygon Testnet',
  LOCALHOST: 'Localhost',
  UNKNOWN: 'Unknown network',
};
