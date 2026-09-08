import {createContext, useCallback, useRef, useState} from "react";

export const APIContext = createContext({});

export const APIProvider = ({children}) => {
  const [store, setStore] = useState({});
  const storeRef = useRef(store);
  storeRef.current = store;

  const fetchAPI = useCallback(async (key, fetcher, refresh = false) => {
    if (!refresh && storeRef.current[key]) return storeRef.current[key];

    const loadingEntry = {data: null, loading: true, error: null};
    storeRef.current = {...storeRef.current, [key]: loadingEntry};
    setStore(prev => ({
      ...prev,
      [key]: loadingEntry
    }));

    try {
      const data = await fetcher();

      const successEntry = {data, loading: false, error: null};
      storeRef.current = {...storeRef.current, [key]: successEntry};
      setStore(prev => ({
        ...prev,
        [key]: successEntry
      }));

      return data;
    } catch (error) {
      const errorEntry = {data: null, loading: false, error};
      storeRef.current = {...storeRef.current, [key]: errorEntry};
      setStore(prev => ({...prev, [key]: errorEntry}));

      return null;
    }
  }, []);

  return (
    <APIContext.Provider value={{store, fetchAPI}}>
      {children}
    </APIContext.Provider>
  );
};
