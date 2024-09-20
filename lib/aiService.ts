import axios from 'axios';

const AI_API_ENDPOINT = 'https://api.openai.com/v1/engines/davinci-codex/completions';
const API_KEY = process.env.OPENAI_API_KEY;

export async function getAIResponse(query: string, protocols: any[]): Promise<string> {
  try {
    const response = await axios.post(AI_API_ENDPOINT, {
      prompt: `Given the following DeFi protocols: ${JSON.stringify(protocols)}\n\nUser: ${query}\nAI:`,
      max_tokens: 150,
      n: 1,
      stop: null,
      temperature: 0.7,
    }, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw error;
  }
}