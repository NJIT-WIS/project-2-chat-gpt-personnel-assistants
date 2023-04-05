// search.js

const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://localhost:9200" });

async function search(indexName) {
  try {
    const response = await client.search({
      index: indexName,
      body: {
        query: {
          match_all: {},
        },
      },
    });

    return response.hits.hits[0]._source.archetypeData;
  } catch (error) {
    console.error("Error searching:", error);
  }
}

module.exports = {
  search,
};

// Usage example
