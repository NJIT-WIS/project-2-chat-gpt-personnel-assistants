const fs = require("fs").promises;
const path = require("path");
const grayMatter = require("gray-matter");
const client = require("../elasticsearch"); // Update the path to your Elasticsearch client configuration

async function indexFile(fileName, directory) {
  const slug = fileName.replace(".md", "");
  const fullPath = path.join(directory, fileName);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const { data, content } = grayMatter(fileContents);

  let indexName = data.title.toLowerCase().replace(/[^a-z0-9]+/g, "");
  indexName = indexName.replace(/^[+-]+/, "");

  if (indexName === "") {
    indexName = "default_index_name";
  }

  const response = await client.index({
    index: indexName,
    body: {
      slug,
      frontmatter: data,
      markdownBody: content,
    },
  });

  if (response.statusCode === 201) {
    console.log(`Indexed file '${fileName}' successfully.`);
  } else {
    console.log(`Failed to index file '${fileName}'.`);
  }
}

async function indexAllMarkdownFiles(directory, batchSize = 5) {
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
indexAllMarkdownFiles("./posts");
