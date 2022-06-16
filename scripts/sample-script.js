const hre = require("hardhat");
const { getContractAddress } = require('@ethersproject/address')


async function main() {


  const [owner] = await ethers.getSigners()
  const transactionCount = await owner.getTransactionCount()

  const lib_adress = getContractAddress({
    from: owner.address,
    nonce: transactionCount
  })

  const Deposit = await hre.ethers.getContractFactory("Deposit", {libraries: {

    deposit: lib_adress
  }});

  const deposit = await Deposit.deploy(8, 900);

  await deposit.deployed();

  console.log("Deposit contract deployed to:", deposit.address);

}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
