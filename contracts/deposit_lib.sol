// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

library deposit {

    function calc(uint256 ay, uint256 pul) public pure returns(uint256) {
        uint256 value = pul + (pul - ((6 * ay) / 100));

        return value;
    }
}