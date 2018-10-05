const Lockcoin = artifacts.require("./Lockcoin");

module.exports = (deployer, networks, accounts) => {
    deployer.deploy(Lockcoin);
}

