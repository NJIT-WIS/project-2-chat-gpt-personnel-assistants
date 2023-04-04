import { Configuration, OpenAIApi } from "openai";
import { OpenAI, PromptTemplate } from "langchain";
import {
  StructuredOutputParser,
  OutputFixingParser,
  CommaSeparatedListOutputParser,
} from "langchain/output_parsers";
import { LLMChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models";
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

    const model = new OpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY,
      temperature: 0.4,
      model: "text-davinci-003",
    });
    const shortmodel = new OpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY,
      temperature: 0.4,
      max_tokens: 25,
      model: "text-davinci-003",
    });

    const title = await model.call(
      " create a title without double quotes for my blog with this." +
        `${topic}` +
        ". here is example output: Blog Title."
    );

    const description = await model.call(
      "write response in markdown format with properly formatted heading. write several paragraphs of blog  with list   for the content given this title" +
        `${title}`
    );

    const excerpt = await shortmodel.call(
      "format. write a summary given this blog content. " + `${title}`
    );

    const tags = await shortmodel.call(
      "write response in yaml safe format. create keyword related to this " +
        `${description}` +
        " here is example output tag1,tag2,tag3"
    );
    console.log(title);

    res.status(200).json({
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
