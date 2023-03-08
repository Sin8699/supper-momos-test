import { axiosInstance } from "./axiosApi";

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

// export const createSocialApi = async (values: Social) =>
//   fetch("/interview/social", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     mode: "no-cors", // no-cors, *cors, same-origin
//     body: values,
//   }).then((data) => data.json());

export const createSocialApi = async (values: Social) =>
  axiosInstance.post("/interview/social", {
    ...values,
  });
