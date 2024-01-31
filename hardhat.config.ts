import dotenv from "dotenv";
dotenv.config();

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const { PRIVATE_KEY, URL } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    opt_goerli: {
      url: `${URL}`,
      accounts: [`${PRIVATE_KEY}`],
    },
  },
};

export default config;
