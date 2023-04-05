"use strict";

var fs = require("fs").promises;

var path = require("path");

var grayMatter = require("gray-matter");

var client = require("../elasticsearch"); // Update the path to your Elasticsearch client configuration


function indexFile(fileName, directory) {
  var slug, fullPath, fileContents, _grayMatter, data, content, indexName, response;

  return regeneratorRuntime.async(function indexFile$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          slug = fileName.replace(".md", "");
          fullPath = path.join(directory, fileName);
          _context.next = 4;
          return regeneratorRuntime.awrap(fs.readFile(fullPath, "utf8"));

        case 4:
          fileContents = _context.sent;
          _grayMatter = grayMatter(fileContents), data = _grayMatter.data, content = _grayMatter.content;
          indexName = data.title.toLowerCase().replace(/[^a-z0-9]+/g, "");
          indexName = indexName.replace(/^[+-]+/, "");

          if (indexName === "") {
            indexName = "default_index_name";
          }

          _context.next = 11;
          return regeneratorRuntime.awrap(client.index({
            index: indexName,
            body: {
              slug: slug,
              frontmatter: data,
              markdownBody: content
            }
          }));

        case 11:
          response = _context.sent;

          if (response.statusCode === 201) {
            console.log("Indexed file '".concat(fileName, "' successfully."));
          } else {
            console.log("Failed to index file '".concat(fileName, "'."));
          }

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
}

function indexAllMarkdownFiles(directory) {
  var batchSize,
      fileNames,
      i,
      batch,
      batchPromises,
      _args2 = arguments;
  return regeneratorRuntime.async(function indexAllMarkdownFiles$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          batchSize = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 5;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(fs.readdir(directory));

        case 4:
          fileNames = _context2.sent;
          i = 0;

        case 6:
          if (!(i < fileNames.length)) {
            _context2.next = 14;
            break;
          }

          batch = fileNames.slice(i, i + batchSize);
          batchPromises = batch.map(function (fileName) {
            return indexFile(fileName, directory);
          });
          _context2.next = 11;
          return regeneratorRuntime.awrap(Promise.all(batchPromises));

        case 11:
          i += batchSize;
          _context2.next = 6;
          break;

        case 14:
          _context2.next = 19;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](1);
          console.error(_context2.t0);

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 16]]);
} // Usage example


indexAllMarkdownFiles("./posts");