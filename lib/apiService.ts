import axios from 'axios';
import { getDefiAnswer } from './defiKnowledgeBase';

const API_URL = 'https://api.llama.fi/protocols';

interface DeFiProtocol {
  name: string;
  tvl: number;
  chain: string;
}

export async function getDeFiData(): Promise<DeFiProtocol[]> {
  try {
    const response = await axios.get(API_URL);
    return response.data.map((protocol: any) => ({
      name: protocol.name,
      tvl: protocol.tvl,
      chain: protocol.chain
    }));
  } catch (error) {
    console.error('Error fetching DeFi data:', error);
    return [];
  }
}

export function getProtocolInfo(protocols: DeFiProtocol[], query: string): string {
  const lowerQuery = query.toLowerCase();
  const matchedProtocol = protocols.find(p => p.name.toLowerCase().includes(lowerQuery));

  if (matchedProtocol) {
    return `${matchedProtocol.name} is a protocol on the ${matchedProtocol.chain} chain with a Total Value Locked (TVL) of $${matchedProtocol.tvl.toLocaleString()}.`;
  }

  return getDefiAnswer(query);
}