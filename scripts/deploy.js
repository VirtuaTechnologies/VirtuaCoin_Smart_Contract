// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');

    // We get the contract to deploy
    const VirtuaCoin = await hre.ethers.getContractFactory("VirtuaCoin");
    const virtuaCoin = await VirtuaCoin.deploy("Virtua Coin", "VCO", "100000000000000000000000000", "0x2dA0a615981C2c9c70E34b8f50Db5f5a905E7928");
    await virtuaCoin.deployed();
    console.log("Virtua Coin Deployed to: ", virtuaCoin.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
});