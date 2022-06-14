require("@nomiclabs/hardhat-waffle");

// Esta é uma tarefa de exemplo do Hardhat. Para aprender a criar o seu acesse
// https://hardhat.org/guides/create-task.html
task("contas", "Imprime a lista de contas", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/_bEj1iL2DfptrO0R2jsDrHAhZPKRP5eU",
      accounts: ["8e87f7e6c6717a22064bb73acb6651e68b946c24ebda2e5f8352e35148305249"],
    },
  },
};

// Você precisa exportar um objeto para configurar sua configuração
// Acesse https://hardhat.org/config/ para saber mais

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
};
