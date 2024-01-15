require("@nomicfoundation/hardhat-toolbox");
require('hardhat-deploy')


module.exports = {
  solidity: "0.8.20",
  namedAccounts: {
    deployer: 'privatekey://15844ccb225f7a278566a45ffae6cfc81cf20ba527d2544b430f7dfb010778fd',
  },
  networks: {
    ronin: {
      chainId: 2020,
      url: 'https://api.roninchain.com/rpc',
    },
    saigon: {
      chainId: 2021,
      url: 'https://saigon-testnet.roninchain.com/rpc',
    },
  }
};

