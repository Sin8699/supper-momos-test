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
  fetch(
    "https://api.supermomos-dev.com/interview/social?" +
      querystring.stringify({
        ...values,
      }),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer",
    }
  )
    .then((data) => data)
    .catch(console.error);
