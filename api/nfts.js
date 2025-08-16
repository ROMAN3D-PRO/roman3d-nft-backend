import axios from "axios";

const CONTRACT_ADDRESS = "0xa8a422FeD9689837D3b1d3C76562eFe00141E107";
const API_KEY = "db571969-9a7f-4a8e-8a9a-b3fd65f31115"; // Clé Mainnet Rarible

export default async function handler(req, res) {
  try {
    const url = `https://api.rarible.org/v0.1/items/byCollection?collection=${CONTRACT_ADDRESS}&size=50`;

    const response = await axios.get(url, {
      headers: {
        "X-API-KEY": API_KEY
      }
    });

    const nfts = response.data.items.map(item => ({
      id: item.id,
      name: item.meta?.name || "NFT sans nom",
      image: item.meta?.content?.[0]?.url?.gateway || "",
      url: `https://rarible.com/token/polygon/${item.tokenId}`
    }));

    res.status(200).json(nfts);
  } catch (err) {
    console.error("Erreur serveur:", err.response?.data || err.message);
    res.status(500).json({ error: "Erreur lors de la récupération des NFTs" });
  }
}
