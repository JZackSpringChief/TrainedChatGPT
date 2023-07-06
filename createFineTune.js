import { openai } from "./script.js";
//after we have uploaded the file, we will copy the file ID and paste into "training_file"

async function createFineTune() {
  try {
    const response = await openai.createFineTune({
      training_file: "file-7XC1aGNibAKpADUxBkKRCWr5",
      model: "davinci",
    });
    console.log("response: ", response);
  } catch (err) {
    console.log("error: ", err.response.data.error);
  }
}

createFineTune();

//depending on the file size that we have uploaded it can take up to 24 hours to complete. we will then create a file called "listFineTunes" so that we can monitor the status of the uploaded file.
