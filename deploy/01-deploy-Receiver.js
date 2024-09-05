const { network, ethers } = require("hardhat");
const { verify } = require("../utility/verify");
require("dotenv").config();
const {
  networkconfig,
  developmentChains,
} = require("../hardhat-config-helper");

const router = "0xd3b06cebf099ce7da4accf578aaebfdbd6e88a93";
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  let Receiver;

  if (chainId == 84532) {
    log("Deploying Receiver ...");
    Receiver = await deploy("DataReceiver", {
      contract: "DataReceiver",
      from: deployer,
      log: true,
      args: [router],
      waitConfirmations: network.config.blockConfirmations || 1,
    });
    log("Deployed!");
    log("------------------------------------------------");
    log(`DataReceiver deployed at ${Receiver.address}`);

    //   if (
    //     !developmentChains.includes(network.name) &&
    //     process.env.ETHERSCAN_API_KEY
    //   ) {
    //     await verify(Receiver.address, [router]);
    //   }
  }
};
