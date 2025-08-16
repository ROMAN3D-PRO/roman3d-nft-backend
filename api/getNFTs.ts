export default async function handler(req, res) {
  const WALLET = "0xa1F3B1592ea95cE73CBD8c3fB28C7Dbd67e76F4B" // ton wallet
  const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZCI6ImZmZGE0Yjc2LTFjZjEtNDA1YS04ODYwLWVmYTAwMTkxYmJkMSIsIm9yZ0lkIjoiNDIwNjg2IiwidXNlcklkIjoiNDMyNjM2IiwidHlwZSI6IlBST0pFQ1QiLCJ0eXBlSWQiOiJmNTU5M2VmZi0zN2U3LTRlYjItYWY4YS1lNTllYTUyMmE0N2QiLCJpYXQiOjE3NTUzMTUzMzQsImV4cCI6NDkxMTA3NTMzNH0.tIF4crVSfS18ghOTrR-_gsas4mRFnx6Ee8v5jPF5GZc"

  try {
    const response = await fetch(
      `https://polygon-mainnet.g.alchemy.com/v2/${API_KEY}/getNFTs/?owner=${WALLET}`
    )
    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des NFTs" })
  }
}
