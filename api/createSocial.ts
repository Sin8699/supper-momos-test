import querystring from "querystring";

interface Social {
  title: string;
  startAt: string;
  venue: string;
  capacity: number;
  price: number;
  description: string;
  isManualApprove: boolean;
  privacy: string;
  banner: string;
  tags: string[];
}

interface CreateSocialRequest extends Social {}

interface CreateSocialResponse extends Social {}

export const createSocialApi = async (values: Social) =>
  fetch("https://api.supermomos-dev.com/interview/social", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "no-cors", // no-cors, *cors, same-origin
    body: JSON.stringify(values),
  })
    .then((data) => data.json())
