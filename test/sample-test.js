const { expect } = require("chai");
const { ethers } = require("hardhat");
describe("deposit_lib", function () {
  it("deposit library explained :D", async function () {
    const lib_factory = await ethers.getContractFactory("Deposit", {libraries: {

      deposit: lib_factory.adress()
    }});

    const deposit = await lib_factory.deploy(8, 900);
  });
});
