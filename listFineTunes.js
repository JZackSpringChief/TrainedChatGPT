import { openai } from "./script.js";

async function listFineTunes() {
  try {
    const response = await openai.listFineTunes();
    console.log("data: ", response.data.data);
  } catch (err) {
    console.log("error: ", err);
  }
}

listFineTunes();

//function will let you know when your personal model has been trained!
