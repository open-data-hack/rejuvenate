import { Web3Storage } from 'web3.storage';

function getAccessToken () {
  return process.env.WEB3STORAGE_API_TOKEN
}

function makeStorageClient () {
  return new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweERiNzY2MmEyRWM2MTI3RDk2OWM5QkY1MGRFNzg2MjNGOTcwMWJjYTAiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Njk0MTA2Mjg5MDEsIm5hbWUiOiJrb2lpX3Rva2VuIn0.SkLCwZIK3AAwxRzb750qTMTHU4TD2uOxk590TN307zw" })
}
export const uploadPromptToIpfs = async (data: any)=>{
    const client = makeStorageClient ();
    const prompt = `
     You are a robot built by rejuvenateAI. Your goal is to predict the rate of aging of users.
    You must respond with the following json output and nothing else. (Reverse, Fast, Moderate, Slow)
    example: {"aging": "Fast"}

    These outputs depend on the input data provided.
    An input data is a json object, with questions as keys and the possible answers as values.
    Note the values are a list of strings.

    example

    Date of Birth: ${data?.birthDate}
    Sex: ${data?.sex}
    Weight: ${data?.weight}
    Height: ${data?.height}
    Diet: ${data?.diet}
    Physical Activity: ${data?.active}
    Hours Sitting Per Day: ${data?.sitting}
    Alcohol Rate: ${data?.alcohol}
    Smoking: ${data?.smoke} ${data?.smokingLength}
    Sleep Per Day: ${data?.sleepLength}
    Overall Health Rating: ${data?.overallHealth}
    `


    const content = new Blob([prompt], { type: "application/json" });
    const fileObj = new File([content], "file.json", {
        type: "application/json",
    });
    const res = await client.put([fileObj]);
    console.log(res);
    return res;
}