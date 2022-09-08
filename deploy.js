const ethers = require("ethers");
const fs = require("fs-extra");
// const fs = require("fs");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(/* "rpc url" */);
  const wallet = new ethers.Wallet(/* "private key" */,
  provider
  );
  const abi = fs.readFileSync(/* "abi file path" */,"utf8");
  const binary = fs.readFileSync(/* "binary file path" */,
  "utf8");
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying, please wait...");
  const contract = await contractFactory.deploy(); //STOP here! Wait for contract to deploy...
  console.log(contract);
  const transactionReceipt = await contract.deployTransaction.wait(1);
  console.log("Here is the deployment transaction (transaction response): ");
  consol.log(contract.deployTransaction);
  console.log("Here is the transaction receipt: ");
  console.log(transactionReceipt);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
