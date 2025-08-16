// pages/api/getNFTs.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Exemple minimal : renvoie un tableau fictif de NFTs
    const nfts = [
      { name: "NFT 1", image: "https://placekitten.com/200/200" },
      { name: "NFT 2", image: "https://placekitten.com/210/210" },
    ];

    res.status(200).json(nfts);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des NFTs" });
  }
}
