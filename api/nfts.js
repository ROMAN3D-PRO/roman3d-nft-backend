import axios from 'axios';

const CONTRACT_ADDRESS = '0xa1F3B1592ea95ce73CBD8c3fb28C7dbd67e76F4B';

export default async function handler(req, res) {
  try {
    const response = await axios.get(`https://api.rarible.org/v0.1/items/byCollection?collection=${CONTRACT_ADDRESS}&size=50`);
    
    const nfts = response.data.items.map(item => ({
      id: item.id,
      name: item.meta?.name || 'NFT sans nom',
      image: item.meta?.content?.[0]?.url?.gateway || '',
      url: `https://rarible.com/token/${item.tokenId}`
    }));
    
    res.status(200).json(nfts);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur lors de la récupération des NFTs');
  }
}
