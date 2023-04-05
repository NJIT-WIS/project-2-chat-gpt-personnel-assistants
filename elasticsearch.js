const { Client } = require("@elastic/elasticsearch");

const client = new Client({
  node: "http://127.0.0.1:9200/", // Replace with your local Elasticsearch cluster's address
});

module.exports = client;

