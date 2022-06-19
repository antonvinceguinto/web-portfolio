const { expect } = require('chai');
const { ethers } = require('hardhat');
const { BigNumber } = require('ethers');
var Web3 = require('web3');
// import hre from 'hardhat';
// import { ethers } from 'hardhat';

const _weiToEth = (amount) => {
  return Web3.utils.fromWei(amount, 'ether');
};

const _BN = (amount) => {
  return BigNumber.from(amount);
};

const _ethToWei = (amount) => {
  return Web3.utils.toWei(amount, 'ether');
};

const getBMAC = async () => {
  const BuyMeACoffee = await ethers.getContractFactory('BuyMeACoffee');
  const bmac = await BuyMeACoffee.deploy();
  await bmac.deployed();
  return bmac;
};

const getBalance = async (address) => {
  const balanceBigInt = await hre.waffle.provider.getBalance(address);
  return ethers.utils.formatEther(balanceBigInt);
};

const printBalances = async (addresses) => {
  let idx = 0;
  for (const address of addresses) {
    console.log(`Address ${address} balance: `, await getBalance(address));
    idx++;
  }
};

const printMemos = async (memos) => {
  for (const memo of memos) {
    const timestamp = memo.timestamp;
    const tipper = memo.name;
    const tipperAddress = memo.from;
    const message = memo.message;
    console.log(
      `At ${timestamp}, ${tipper} (${tipperAddress}) said: "${message}"`
    );
  }
};

/* ----- End of helpers ----- */

describe('Buy me a coffee test', function () {
  it('Should tip the owner', async function () {
    const bmac = await getBMAC();
    const [owner, tipper, tipper2, tipper3] = await ethers.getSigners();
    const addresses = [
      owner.address,
      tipper.address,
      tipper3.address,
      bmac.address,
    ];

    //* Check initial balances
    expect(await getBalance(tipper.address)).to.equal('10000.0');
    expect(await getBalance(bmac.address)).to.equal('0.0');

    console.log('=== starting balance ===');
    await printBalances(addresses);

    const tip = {
      value: ethers.utils.parseEther('1'),
    };

    const requiredTip = 1;

    await bmac
      .connect(tipper)
      .buyMeACoffee('Joshua', 'Great Job!', requiredTip, tip);
    await bmac
      .connect(tipper2)
      .buyMeACoffee('Makoy', 'Amazing work tbh', requiredTip, tip);
    await bmac
      .connect(tipper3)
      .buyMeACoffee('Ibby', 'Arf arf!', requiredTip, tip);

    console.log('=== Tipper1 is tipping the owner ===');
    console.log('=== Tipper2 is tipping the owner ===');
    console.log('=== Tipper3 is tipping the owner ===');

    //* Show updated balances
    console.log('=== ending balance ===');
    await printBalances(addresses);

    //* Balance should be updated
    // Tipper 1 balance
    let tipperBalance = Number.parseInt(await getBalance(tipper.address));
    expect(tipperBalance).to.be.lessThanOrEqual(9999);

    // Tipper 2 balance
    tipperBalance = Number.parseInt(await getBalance(tipper2.address));
    expect(tipperBalance).to.be.lessThanOrEqual(9999);

    // Tips/Funds balance
    expect(await getBalance(bmac.address)).to.equal('3.0');

    //* Read the MEMOS
    console.log('=== memos they left ===');
    const memos = await bmac.getMemos();
    printMemos(memos);
  });
});
