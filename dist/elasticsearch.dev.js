"use strict";

var _require = require("@elastic/elasticsearch"),
    Client = _require.Client;

var client = new Client({
  node: "http://172.19.144.1:9200/" // Replace with your local Elasticsearch cluster's address

});
module.exports = client;