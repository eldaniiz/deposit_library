const { expect } = require("chai");
const { ethers } = require("hardhat");
describe("deposit_lib", function () {
  it("deposit library explained :D", async function () {
    const lib_factory = await ethers.getContractFactory("Deposit", {libraries: {

      deposit: "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"
    }});

    const deposit = await lib_factory.deploy(8, 900);
  });

  it("deposit library explained :D", async function () {
    const lib_factory2 = await ethers.getContractFactory("Deposit2", {libraries: {

      deposit: "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"
    }});

    const deposit2 = await lib_factory2.deploy(8, 900);
  });
});
