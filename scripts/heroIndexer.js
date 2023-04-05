const fs = require("fs").promises;
const path = require("path");
const client = require("../elasticsearch"); // Update the path to your Elasticsearch client configuration

async function indexFile(fileName, directory) {
  const fullPath = path.join(directory, fileName);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const data = JSON.parse(fileContents);

  for (const experiment of data.archetypes) {
    let indexName = experiment.id.toLowerCase().replace(/[^a-z0-9]+/g, "");
    indexName = indexName.replace(/^[+-]+/, "");

    if (indexName === "") {
      indexName = "default_index_name";
    }

    const response = await client.index({
      index: indexName,
      body: {
        slug: experiment.id,
        archetypeData: experiment,
      },
    });

    if (response.statusCode === 201) {
      console.log(`Indexed experiment '${experiment.id}' successfully.`);
    } else {
      console.log(`Failed to index experiment '${experiment.id}'.`);
    }
  }
}

async function indexAllJsonFiles(directory, batchSize = 1) {
  try {
    const fileNames = await fs.readdir(directory);

    for (let i = 0; i < fileNames.length; i += batchSize) {
      const batch = fileNames.slice(i, i + batchSize);
      const batchPromises = batch.map((fileName) =>
        indexFile(fileName, directory)
      );
      await Promise.all(batchPromises);
    }
  } catch (error) {
    console.error(error);
  }
}

// Usage example
indexAllJsonFiles("./salesFunnel");
