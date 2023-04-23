const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
  const { prompt, size } = req.body;
  console.log(prompt);
  console.log(size);
  try {
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: size,
    });
    const imgUrl = response.data.data[0].url;

    res.status(200).json({ data: imgUrl });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = generateImage;
