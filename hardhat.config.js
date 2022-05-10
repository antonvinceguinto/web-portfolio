require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

task('accounts', 'Prints the list of accounts', async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const NEXT_PUBLIC_GOERLI_URL = process.env.GOERLI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: '0.8.4',
  networks: {
    // goerli: { url: NEXT_PUBLIC_GOERLI_URL, account: [PRIVATE_KEY] },
  },
};
