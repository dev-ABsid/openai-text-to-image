# Node.js App with Express and OpenAI

This Node.js app is built using the Express framework and OpenAI API to generate an AI image from a given prompt.

## Getting Started

1. Clone the repository to your local machine
2. Run `yarn add` to install the dependencies
3. Set your OpenAI API key as an environment variable named `OPENAI_API_KEY` and set your `PORT`
4. Start the server using `yarn dev`

## API Endpoint

### `POST /openai/generate-image`

This endpoint takes a JSON payload with the following properties:

- `prompt`: A string representing the prompt for the AI image generation
- `size`: A string representing the size of the generated image in the format `widthxheight`
