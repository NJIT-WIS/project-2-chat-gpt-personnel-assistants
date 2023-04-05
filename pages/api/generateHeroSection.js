import { Configuration, OpenAIApi } from "openai";
import { OpenAI, PromptTemplate } from "langchain";
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
/*
export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const prompt =
        "Generate a hero section for a website using the brand archetype: The Explorer, including a headline, and subtitle on seperate lines, do not label them.The hero section should inspire and engage visitors to join a web class focused on creativity and innovation.";

      const model = new OpenAI({
        openAIApiKey: process.env.OPENAI_API_KEY,
        temperature: 0.9,
        model: "text-davinci-003",
      });

      const title = await model.call(prompt);

      const heroSection = title;
      console.log(heroSection);

      res.status(200).json({ heroSection });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "An error occurred while generating the hero section.",
      });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};*/
