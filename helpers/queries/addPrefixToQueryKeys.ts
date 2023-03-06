/**
 * This function will return new queryKeys object with prefix
 * We need this function to prevent duplicate queryKeys which put in different folder
 * @param prefix string
 * @param queryKeys {[key in string]: string}
 * @returns {[key in string]: prefix + string}
 */
function addPrefixToQueryKeys<T extends Record<string, unknown>>(prefix: string, queryKeys: T): T {

  const newQueryKeys: Record<string, string> = {};

  Object.entries(queryKeys).forEach(([key, value]) => {
    newQueryKeys[key] = `${prefix}--${value}`;
  });

  // @ts-ignore Because the key would be the same
  return newQueryKeys;
}


export { addPrefixToQueryKeys };
