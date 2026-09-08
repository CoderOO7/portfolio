import {useCallback, useContext} from "react";
import {APIContext} from "../contexts/APIContext";
import {apiConfig} from "../configs/apiConfig";

export const useAPI = (key, refresh = false) => {
  const {store = {}, fetchAPI = () => null} = useContext(APIContext);

  const submit = useCallback(() => {
    const apiRequest = apiConfig[key] ?? {};
    fetchAPI(key, apiRequest, refresh);
  }, [fetchAPI, key, refresh]);

  return {...(store[key] ?? {data: null, loading: true, error: null}), submit};
};
