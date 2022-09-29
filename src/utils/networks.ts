import { ChainIds } from "../utils/MetaMask";
import { addresses as mainnet } from "../../generated/addresses_mainnet";
import { addresses as localhost } from "../../generated/addresses_localhost";
import { addresses as rinkeby } from "../../generated/addresses_rinkeby";
import { addresses as goerli } from "../../generated/addresses_goerli";
import { token_addresses as draw_localhost } from "../../generated/addresses_draw_localhost";
import { token_addresses as draw_rinkeby } from "../../generated/addresses_draw_rinkeby";
import { token_addresses as draw_goerli } from "../../generated/addresses_draw_goerli";

export const getContractAddresses = (network: string) => {
  if (network == "localhost") {
    return {
      network,
      chainId: ChainIds.Localhost,
      storeAddress: localhost.storeAddress,
      drawAddress: draw_localhost.customTokenAddress,
      composerAddress: draw_localhost.composerAddress,
      registryAddress: draw_localhost.registryAddress,
      tokenAddress: "",
    };
  }
  if (network == "rinkeby") {
    return {
      network,
      EtherscanBase: "https://rinkeby.etherscan.io/address",
      chainId: ChainIds.RinkebyTestNet,
      storeAddress: rinkeby.storeAddress,
      drawAddress: draw_rinkeby.customTokenAddress,
      composerAddress: draw_rinkeby.composerAddress,
      registryAddress: draw_rinkeby.registryAddress,
      tokenAddress: "",
    };
  }
  if (network == "goerli") {
    return {
      network,
      EtherscanBase: "https://rinkeby.etherscan.io/address",
      chainId: ChainIds.Goerli,
      storeAddress: goerli.storeAddress,
      drawAddress: draw_goerli.customTokenAddress,
      composerAddress: draw_goerli.composerAddress,
      registryAddress: draw_goerli.registryAddress,
      tokenAddress: "",
    };
  }
  if (network == "mainnet") {
    return {
      network,
      EtherscanBase: "https://etherscan.io/address",
      chainId: ChainIds.Mainnet,
      storeAddress: mainnet.storeAddress,
      drawAddress: "to be determined", // MEMO: don't forget to change the category in Draw.vue as well
      composerAddress: "to be determined",
      registryAddress: "to be determined",
      tokenAddress: "",
    };
  }
  console.error("**** unexpected");
};
