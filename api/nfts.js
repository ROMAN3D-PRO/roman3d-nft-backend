import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { Polygon } from "@thirdweb-dev/chains";

export default async function handler(req, res) {
  try {
    const sdk = new ThirdwebSDK(Polygon, {
      clientId: process.env.THIRDWEB_CLIENT_ID,
    });

    // Adresse de ton contrat NFT
    const contract = await sdk.getContract("0xTON_CONTRAT");

    // Récupère les NFTs
    const nfts = await contract.erc721.getAll();

    res.status(200).json(nfts);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Erreur lors de la récupération des NFTs" });
  }
}
