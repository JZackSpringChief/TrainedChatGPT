import { openai } from "./script.js";

//after we've ran listFineTunes well will copy the model ID into 'model' and we will run in node to see if our model was trained successfully!

async function createCompletion() {
  try {
    const response = await openai.createCompletion({
      model: "davinci:ft-personal-2023-06-26-23-43-26",
      prompt:
        "I have a monthly income of $4050, and I'm saving money to enroll in a physical activity. How should I budget?",
      max_tokens: 100,
    });
    if (response.data) {
      console.log("choices: ", response.data.choices);
    }
  } catch (err) {
    console.log("err: ", err);
  }
}

createCompletion();
