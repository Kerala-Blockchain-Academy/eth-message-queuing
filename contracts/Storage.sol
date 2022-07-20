// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Storage {
    string public data;

    function setData(string memory _data) public {
        data = _data;
    }
}
