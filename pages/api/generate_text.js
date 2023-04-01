import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const { prompt } = req.body;

  if (!prompt) {
    res.status(400).json({ error: "Missing prompt" });
    return;
  }

  try {
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const openaiResponse = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "write a blog post about ice cream\n\n",
      temperature: 0.4,
      max_tokens: 618,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    res
      .status(200)
      .json({ generated_text: openaiResponse.data.choices[0].text.trim() });
    console.log(openaiResponse.data.choices[0]);
  } catch (error) {
    console.error(
      "Error in OpenAI API call:",
      error.response ? error.response.data : error
    );
    res.status(500).json({ error: "Failed to generate text" });
  }
}
