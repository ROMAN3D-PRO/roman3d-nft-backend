import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";

// Polygon mainnet RPC
const provider = new ethers.JsonRpcProvider("https://polygon-rpc.com");

// Adresse de ton contrat NFT Collection 2D
const CONTRACT_ADDRESS = "0xa8a422FeD9689837D3b1d3C76562eFe00141E107";

const sdk = new ThirdwebSDK(provider);

export default async function handler(req, res) {
  try {
    const contract = await sdk.getContract(CONTRACT_ADDRESS);
    const nfts = await contract.erc721.getAll(); // récupère tous les NFTs
    res.status(200).json(nfts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur lors de la récupération des NFTs" });
  }
}
