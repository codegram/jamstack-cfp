require("dotenv").config();
const axios = require("axios");

const headers = {
  "content-type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST",
  "Access-Control-Allow-Headers": "Content-Type",
};

function preflight() {
  return {
    statusCode: 204,
    headers,
    body: {},
  };
}

function submit(data) {
  const owner = "codegram";
  const name = "jamstack-cfp";

  return axios.request({
    url: `https://api.github.com/repos/${owner}/${name}/dispatches`,
    method: "post",
    headers: {
      Accept: "application/vnd.github.everest-preview+json",
      Authorization: `token ${process.env.GH_TOKEN_PERSONAL}`,
    },
    data: {
      event_type: "handle-submission",
      client_payload: {
        name: data.name,
        title: data.title,
        description: data.description,
        date: new Date().getTime(),
      },
    },
  });
}

export async function handler(request) {
  if (request.httpMethod === "OPTIONS") {
    return preflight();
  }

  const body = JSON.parse(request.body);

  return submit(body)
    .then(() => {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          message: `Success`,
        }),
      };
    })
    .catch(({ response }) => {
      return {
        statusCode: response.status || 500,
        headers,
        body: JSON.stringify(response.data),
      };
    });
}
