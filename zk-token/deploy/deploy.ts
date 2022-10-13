import { utils, Wallet } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the Token contract`);

  // Initialize the wallet.
  const wallet = new Wallet("444a9d3d9d6d057ce093c37bcd511d7050b723ba60b7dd46fb779757d4666236");

  // Create deployer object and load the artifact of the contract we want to deploy.
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("Token");



 
  const tokenContract = await deployer.deploy(artifact);

  // Show the contract info.
  const contractAddress = tokenContract.address;
  console.log(`${artifact.contractName} was deployed to ${contractAddress}`);

  




}
