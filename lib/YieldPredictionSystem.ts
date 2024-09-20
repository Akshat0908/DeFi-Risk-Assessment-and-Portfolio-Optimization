import { YieldPredictionModel } from './yieldPredictionModel';
import { ProtocolData } from './interfaces/ProtocolConnector';

export class YieldPredictionSystem {
  private model: YieldPredictionModel;

  constructor() {
    this.model = new YieldPredictionModel();
  }

  async trainModel(historicalData: ProtocolData[]) {
    const data = historicalData.map(protocol => [protocol.tvl, protocol.apy, Date.now()]); // You might want to use a more meaningful timestamp
    const labels = historicalData.map(protocol => protocol.apy);
    await this.model.train(data, labels);
  }

  predictYield(protocol: ProtocolData): number {
    return this.model.predict([protocol.tvl, protocol.apy, Date.now()]);
  }
}