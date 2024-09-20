export interface ProtocolData {
  protocolName: string;
  chain: string;
  tvl: number;
  apy: number;
  // Add more fields as needed
}

export interface ProtocolConnector {
  getProtocolData(): Promise<ProtocolData>;
}