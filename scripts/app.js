"use strict";

const { ethers } = require("hardhat");
const abi = require("./abi.json");

const contractAddr = "0xB07f97C14d1b1B08481F9e2c3B8f13226ec0C903"

// instanciate the steal contract
const provider = new ethers.providers.JsonRpcProvider(
  process.env.ALCHEMY_RPC_URL
);

const contract = new ethers.Contract(contractAddr, abi, provider);

// filter the emited events (trnasfer) y and get the current holders

const getContractEvents = async () => {
  const events = await contract.queryFilter([
    contract.filters.TransferSingle(),
  ]);
  console.log(events);
};

getContractEvents();

// iterate the list of actual owners y and call balanceof

// generate a merkle tree 

// mint the NFTs , and fix the price

// send the NFTs to the holders

// send the NFTs to the holders using the merkle tree.


