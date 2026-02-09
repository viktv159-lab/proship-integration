// Proship API Client
// TODO: Implement based on API docs

class ProshipClient {
  constructor(apiKey, apiSecret) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.baseUrl = process.env.PROSHIP_BASE_URL || 'https://api.proship.me';
  }

  // TODO: Add methods based on API documentation
}

module.exports = { ProshipClient };
