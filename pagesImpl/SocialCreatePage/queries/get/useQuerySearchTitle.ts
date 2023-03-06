import { useMutation } from "react-query";
import { createSocialApi } from "../../../../api/createSocial";
import { CREATE_SOCIAL_PAGE_QUERY_KEYS } from "../SocialCreatePage.queryKeys";

export const useMutationCreateSocial = () =>
  useMutation(createSocialApi, {
    mutationKey: [CREATE_SOCIAL_PAGE_QUERY_KEYS.CREATE_SOCIAL],
  });
