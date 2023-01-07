import express from "express";
import { Configuration, OpenAIApi } from "openai";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3080;

app.use(bodyParser.json());
app.use(cors());

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

app.post("/textup", async (req, res) => {
  const { message } = req.body;

  console.log(req.body);

  const responseOpenAi = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${message}`,
    max_tokens: 255,
    temperature: 0,
  });
  let resposta = responseOpenAi.data.choices[0].text;

  res.send(resposta);
});

app.listen(port);
