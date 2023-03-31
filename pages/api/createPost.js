import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import nextConnect from "next-connect";
import formidable from "formidable";

const handler = nextConnect();

handler.post(async (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(500).json({ message: "Error parsing form data", error: err });
      return;
    }

    const { title, excerpt, description, tags } = fields;
    const id = uuidv4();
    const date = new Date().toISOString().slice(0, 10);

    const postData = `---
id: ${id}
title: '${title}'
date: '${date}'
excerpt: '${excerpt}'
hero_image: '/${id}.jpg'
tags: ${JSON.stringify(tags)}
---

${description}
`;

    const filePath = path.join(process.cwd(), "posts", `${id}.md`);

    try {
      fs.writeFileSync(filePath, postData);

      if (files.image) {
        const image = files.image;
        console.log(image.filepath);
        const imagePath = path.join(process.cwd(), "/public", `${id}.jpg`);
        fs.renameSync(image.filepath, imagePath);
      } else {
        res.status(400).json({ message: "Image file not found" });
        return;
      }

      res.status(200).json({ message: "Post created successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to create post", error });
      console.log(error);
    }
  });
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
