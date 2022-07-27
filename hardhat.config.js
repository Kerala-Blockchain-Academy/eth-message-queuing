require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",

  defaultNetwork: "localhost",

  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
    },
    polygon: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/iXDJBEPZT6kLteFaRdgrIYWEor5VaZGK",
      accounts: ['2d4d924efe31cf9514e6ba1cb4ea3c0b50f5b7317ec3954d207dd925e57d9e00']
    }
  }
};
