// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import {deposit} from './deposit_lib.sol';

contract Deposit {
    
    uint256 public ay;
    uint256 public pul;
    uint256 public faiz;
    address public owner;

    constructor(uint256 _ay, uint256 _pul) {
        ay = _ay;
        pul = _pul;
        faiz = 10;
        owner = msg.sender;
    }

    function lastvalue() public view returns(uint256 value) {
        value = deposit.calc(ay, pul, faiz);

        return value;
    }
}

contract Deposit2 {
    
    uint256 public ay;
    uint256 public pul;
    uint256 public faiz;
    address public owner;

    constructor(uint256 _ay, uint256 _pul) {
        ay = _ay;
        pul = _pul;
        faiz = 20;
        owner = msg.sender;
    }

    function lastvalue() public view returns(uint256 value) {
        value = deposit.calc(ay, pul, faiz);

        return value;
    }
}