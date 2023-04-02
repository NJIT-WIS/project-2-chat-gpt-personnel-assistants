import { Configuration, OpenAIApi } from "openai";
import { OpenAI, PromptTemplate } from "langchain";
import {
  StructuredOutputParser,
  OutputFixingParser,
  CommaSeparatedListOutputParser,
} from "langchain/output_parsers";
import { LLMChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models";
import { rJSON } from "relaxed-json";
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  SystemMessagePromptTemplate,
} from "langchain/prompts";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const { prompt } = req.body;
  const topic = prompt;
  console.log(prompt);

  if (!prompt) {
    res.status(400).json({ error: "Missing prompt" });
    return;
  }

  try {
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    /*
    const parser = StructuredOutputParser.fromNamesAndDescriptions({
      description: "Create  blog content about the users topic. ",

      title: "give a title for the blog.",
      excerpt: "write a short excertp about the blog content",
      tags: "generare a list of related tags to the blog",
    });
    const formatInstructions = parser.getFormatInstructions();

    const promptTemp = new PromptTemplate({
      template:
        "Create a blog post for the users topic as best as possible. each instruction should be seperated by commas.\n{format_instructions}\n{question}",
      inputVariables: ["question"],
      partialVariables: { format_instructions: formatInstructions },
    }); */
    const model = new OpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY,
      temperature: 0.9,
    });

    const title = await model.call(
      "write response in markdown format. create a title for my blog with this " +
        `${topic}`
    );

    const description = await model.call(
      "write response in markdown format with properly formatted heading and list if required. write blog content given this title" +
        `${title}`
    );

    const excerpt = await model.call(
      "write response in markdown format. write a one sentence summary given this blog content " +
        `${description}`
    );

    const tags = await model.call(
      "write response in markdown format. get a comma seperated list of  5 tags related to this " +
        `${description}`
    );

    res
      .status(200)
      .json({
        title: title,
        excerpt: excerpt,
        description: description,
        tags: tags,
      });
  } catch (error) {
    console.error(
      "Error in OpenAI API call:",
      error.response ? error.response.data : error
    );
    res.status(500).json({ error: "Failed to generate text" });
  }
}
