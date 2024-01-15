import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv'
dotenv.config()

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks:{
    local:{
      url:"http://127.0.0.1:8545",
      chainId:31337,
      accounts:{
        mnemonic: "test"
      }
    },
    bsctest:{
      url: process.env.BSC_URL,
      chainId:97,
      accounts:{
        mnemonic: process.env.SECRET
      }
    }
  },
  etherscan:{
    apiKey: process.env.API_KEY
  }
};

export default config;
