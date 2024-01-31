import { ethers } from "hardhat";

async function main() {
  const attestor = await ethers.deployContract("Attestor");

  await attestor.waitForDeployment();

  console.log(`Attestor deployed to ${attestor.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
