// pages/api/create-index.js
import client from "../../elasticsearch";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const indexName = req.body.indexName;

    try {
      // Check if the index already exists
      const indexExists = await client.indices.exists({ index: indexName });

      if (indexExists.body) {
        res
          .status(400)
          .json({ message: `Index '${indexName}' already exists.` });
        return;
      }

      // Create the index
      const response = await client.indices.create({ index: indexName });

      if (response.statusCode === 200) {
        res
          .status(200)
          .json({ message: `Index '${indexName}' created successfully.` });
      } else {
        res
          .status(500)
          .json({ message: `Failed to create index '${indexName}'.` });
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "An error occurred while creating the index." });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
