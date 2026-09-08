import {BASE_URL} from "../constants";

export const fetchProfileAPI = async () => {
  try {
    const response = await fetch(`${BASE_URL}/profile.json`);
    if (!response.ok) {
      throw response;
    }
    const data = await response.json();
    return data.data.user;
  } catch (error) {
    console.error(`fetchProfileAPI ${error}`);
    throw error;
  }
};
