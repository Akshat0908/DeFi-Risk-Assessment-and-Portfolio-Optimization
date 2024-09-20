import * as tf from '@tensorflow/tfjs';

export class YieldPredictionModel {
  private model: tf.Sequential;

  constructor() {
    this.model = tf.sequential({
      layers: [
        tf.layers.dense({ inputShape: [3], units: 64, activation: 'relu' }),
        tf.layers.dense({ units: 32, activation: 'relu' }),
        tf.layers.dense({ units: 1 })
      ]
    });

    this.model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });
  }

  async train(data: number[][], labels: number[], epochs: number = 100) {
    const xs = tf.tensor2d(data);
    const ys = tf.tensor2d(labels, [labels.length, 1]);

    await this.model.fit(xs, ys, {
      epochs,
      callbacks: {
        onEpochEnd: (epoch, logs) => {
          console.log(`Epoch ${epoch}: loss = ${logs?.loss}`);
        }
      }
    });
  }

  predict(input: number[]): number {
    const inputTensor = tf.tensor2d([input]);
    const prediction = this.model.predict(inputTensor) as tf.Tensor;
    return prediction.dataSync()[0];
  }
}