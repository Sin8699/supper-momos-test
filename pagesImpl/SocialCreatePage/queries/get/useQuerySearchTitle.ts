import { useMutation } from "react-query";
import { createSocialApi } from "../../../../api/createSocial";
import { CREATE_SOCIAL_PAGE_QUERY_KEYS } from "../SocialCreatePage.queryKeys";
import { ToastContainer, toast } from "react-toastify";

export const useMutationCreateSocial = () =>
  useMutation(createSocialApi, {
    mutationKey: [CREATE_SOCIAL_PAGE_QUERY_KEYS.CREATE_SOCIAL],
    onError: (error) => {
      toast.error(error as string, {
        position: "top-center",
        autoClose: 5000,
      });
    },
  });
