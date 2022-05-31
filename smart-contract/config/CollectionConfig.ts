import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'OddWarriors',
  tokenName: 'OddWarriors NFT',
  tokenSymbol: 'OddWarriors',
  hiddenMetadataUri: 'ipfs://__CID__/hidden.json',
  maxSupply: 8000,
  whitelistSale: {
    price: 0.0018,
    maxMintAmountPerTx: 10,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.0018,
    maxMintAmountPerTx: 10,
  },
  contractAddress: '0x54fB87C44d29c180868F68bb82bDE9424d476a54',
  marketplaceIdentifier: 'OddWarriorsNFT',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
