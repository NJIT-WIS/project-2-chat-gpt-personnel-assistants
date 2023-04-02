import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const { blogPostTopic, style, colorScheme, imageSize } = req.body.blogTopic;

  console.log(Object.keys(req.body.blogTopic));
  if (!blogPostTopic || !style || !colorScheme || !imageSize) {
    res.status(400).json({ error: "Missing parameters" + req.body });
    return;
  }

  try {
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const prompt = `Generate an image of a ${style} illustration related to  "${blogPostTopic}" `;

    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });

    const imageUrl = response.data.data[0].url;

    res.status(200).json({ generated_image_url: imageUrl });
    console.log(response.data);
  } catch (error) {
    console.error(
      "Error in OpenAI API call:",
      error.response ? error.response.data : error
    );
    res.status(500).json({ error: "Failed to generate image" });
  }
}
