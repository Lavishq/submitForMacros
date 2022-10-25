const hre = require("hardhat");

async function main() {
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello World");
  await greeter.deployed();

  console.log(`contract successfully deployed to ${greeter.address}`);

  const Token = await hre.ethers.getContractFactory("Token");
  const token = await Token.deploy();
  await token.deployed();

  console.log(`contract successfully deployed to ${token.address}`);

  const NDToken = await hre.ethers.getContractFactory("NDToken");
  const nptoken = await NDToken.deploy("Nader Pro Dabit", "NP");
  await nptoken.deployed();

  console.log(`contract successfully deployed to ${nptoken.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
