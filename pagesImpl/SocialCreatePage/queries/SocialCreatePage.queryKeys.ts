import { addPrefixToQueryKeys } from "../../../helpers/queries/addPrefixToQueryKeys";


const PREFIX = "CREATE_SOCIAL_PAGE";

enum QueryKeys {
  CREATE_SOCIAL = "CREATE_SOCIAL",
}

export const CREATE_SOCIAL_PAGE_QUERY_KEYS = addPrefixToQueryKeys(PREFIX, QueryKeys);
