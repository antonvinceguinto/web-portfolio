//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import 'hardhat/console.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract BuyMeACoffee is Ownable {
  struct Memo {
    address from;
    uint256 timestamp;
    string name;
    string message;
  }

  event NewMemo(
    address indexed from,
    uint256 timestamp,
    string name,
    string message
  );

  Memo[] memos;

  constructor() {}

  /**
   * @dev buy's the owner a coffee
   * @param _name name of the sender
   * @param _message a nice message
   */
  function buyMeACoffee(string memory _name, string memory _message)
    external
    payable
  {
    require(msg.value >= 0.003 ether, 'Coffee: Insufficient Amount');

    memos.push(Memo(msg.sender, block.timestamp, _name, _message));
    emit NewMemo(msg.sender, block.timestamp, _name, _message);
  }

  function withdrawTips() external onlyOwner {
    require(payable(owner()).send(address(this).balance));
  }

  function getMemos() external view returns (Memo[] memory) {
    return memos;
  }
}
