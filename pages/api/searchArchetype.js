import { Client } from "@elastic/elasticsearch";
const client = new Client({ node: "http://localhost:9200" });

export default async function handler(req, res) {
  const { indexName } = req.query;

  try {
    const response = await client.search({
      index: indexName,
      body: {
        query: {
          match_all: {}, // This query returns all documents in the specified index
        },
      },
    });

    res
      .status(200)
      .json({ heroText: response.hits.hits[0]._source.archetypeData });
    console.log(response.hits.hits[0]._source.archetypeData);
  } catch (error) {
    console.error("Error searching:", error);
    res.status(500).json({ error: "An error occurred while searching" });
  }
}
