import {openSource} from "./portfolio";
import {BASE_URL} from "./constants";

export const formatFileSizeDisplay = value => {
  if (value < 1024) {
    return `${value} KB`;
  }
  return `${parseFloat((value / 1024).toFixed(1))} MB`;
};

export const fetchProfileData = async () => {
  if (openSource.showGithubProfile !== "true") {
    return null;
  }

  try {
    const response = await fetch(`${BASE_URL}/profile.json`);
    if (!response.ok) {
      throw response;
    }
    const data = await response.json();
    return data.data.user;
  } catch (error) {
    console.error(
      `${error} (because of this error, profile data could not be fetched)`
    );
    openSource.showGithubProfile = "false";
    return null;
  }
};
