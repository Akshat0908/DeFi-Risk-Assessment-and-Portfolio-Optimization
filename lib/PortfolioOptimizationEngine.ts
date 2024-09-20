import { ProtocolData } from './interfaces/ProtocolConnector';
import { RiskAssessmentEngine } from './RiskAssessmentEngine';

export class PortfolioOptimizationEngine {
  private riskEngine: RiskAssessmentEngine;

  constructor(riskEngine: RiskAssessmentEngine) {
    this.riskEngine = riskEngine;
  }

  optimizePortfolio(protocols: ProtocolData[], riskTolerance: number) {
    const riskScores = protocols.map(p => this.riskEngine.assessRisk(p).compositeRisk);
    const totalRisk = riskScores.reduce((sum, score) => sum + score, 0);

    // Simple optimization strategy: allocate based on inverse risk
    const allocations = riskScores.map(score => {
      const inverseRisk = 1 - score;
      return (inverseRisk / riskScores.length) * riskTolerance + 
             ((1 - riskTolerance) / protocols.length);
    });

    // Normalize allocations to ensure they sum to 1
    const totalAllocation = allocations.reduce((sum, allocation) => sum + allocation, 0);
    return allocations.map(allocation => allocation / totalAllocation);
  }
}