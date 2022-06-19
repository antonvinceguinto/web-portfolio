const hre = require('hardhat');

async function main() {
  const BuyMeACoffee = await hre.ethers.getContractFactory('BuyMeACoffee');
  const bmac = await BuyMeACoffee.deploy();
  await bmac.deployed();
  console.log('Buy Me A Coffee deployed to:', bmac.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
