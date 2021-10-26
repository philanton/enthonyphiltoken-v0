import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@openzeppelin/hardhat-upgrades";

task("accounts", "Prints the list of accounts", async (_, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

export default {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_PROJECT_KEY}`,
      accounts: [`0x${PRIVKEY}`]
    }
  }
};
