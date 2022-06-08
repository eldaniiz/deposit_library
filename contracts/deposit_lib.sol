// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

library deposit {

    function calc(uint256 ay, uint256 pul, uint256 faiz) public pure returns(uint256) {
        uint256 value = pul + (pul - ((faiz * ay) / 100));

        return value;
    }
}