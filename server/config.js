import 'dotenv/config';

export default {
  port: parseInt(process.env.PORT || '3000', 10),
  gatewayUrl: process.env.GATEWAY_URL || 'ws://127.0.0.1:18789',
  gatewayToken: process.env.GATEWAY_TOKEN || '',
  demoMode: process.env.DEMO_MODE !== 'false',
  openaiApiKey: process.env.OPENAI_API_KEY || '',
  weatherLocation: process.env.WEATHER_LOCATION || 'Kingston,Ontario,Canada',
};
