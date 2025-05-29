require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { InferenceClient } = require('@huggingface/inference');

const app = express();
app.use(cors());
app.use(express.json());

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

const client = new InferenceClient(process.env.HF_ACCESS_TOKEN);

app.post('/api/recipe', async (req, res) => {
  const { ingredients } = req.body;
  try {
    const chatCompletion = await client.chatCompletion({
      model: "mistralai/Mistral-7B-Instruct-v0.3",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `I have ${ingredients.join(", ")}. Please give me a recipe you'd recommend I make!` }
      ],
    });
    res.json(chatCompletion);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));