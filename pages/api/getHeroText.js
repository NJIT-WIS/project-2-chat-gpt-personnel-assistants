import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const { number } = req.query; // Access the number from the query parameters
  const jsonDirectory = path.join(process.cwd(), "salesFunnel");

  const jsonData = [];
  const jsonFileNames = fs.readdirSync(jsonDirectory);
  for (const fileName of jsonFileNames) {
    if (path.extname(fileName) === ".json") {
      const fullPath = path.join(jsonDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const data = JSON.parse(fileContents);

      jsonData.push(data);
    }
  }
console.log(jsonData[1].archetypes[number],"api");
  // Filter the data based on the provided number

  res.status(200).json(jsonData);
}
