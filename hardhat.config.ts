import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'dotenv/config';
import 'hardhat-deploy';
import 'hardhat-contract-sizer';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-ethers';

const config: HardhatUserConfig = {
  solidity: "0.8.24",

  defaultNetwork: 'hardhat',
  networks: {
    ethereum: {
      url: process.env.url_ethereum,
      accounts: {
        mnemonic: process.env.mnemonic_ethereum,
      },
      chainId: 1,
    },
    ethereum_pre: {
      url: process.env.url_ethereum,
      accounts: {
        mnemonic: process.env.mnemonic_ethereum,
      },
      chainId: 1,
    },
    sepolia: {
      url: process.env.url_sepolia,
      accounts: {
        mnemonic: process.env.mnemonic_sepolia,
      },
      chainId: 11155111,
      gasMultiplier: 15,
    },
    bitlayer_test: {
      url: process.env.url_bitlayer,
      accounts: {
        mnemonic: process.env.mnemonic_bitlayer,
      },
      chainId: 200810,
    },
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.apikey_sepolia,
    }
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};

export default config;
